import RNFB from 'react-native-fetch-blob';
import { capitalize, replaceLodash } from './custom-helper-functions';
const { config, fs } = RNFB;


const dirsMapping = {
	"picture": fs.dirs.PictureDir,
	"download": fs.dirs.DownloadDir,
	"main_bundle": fs.dirs.MainBundleDir,
	"movie": fs.dirs.MovieDir,
	"music": fs.dirs.MusicDir,
	"lib": fs.dirs.LibraryDir,
	"cache": fs.dirs.CacheDir,
	"dcim": fs.dirs.DCIMDir,
	"document": fs.dirs.DocumentDir,
	"sd_card_app": fs.dirs.SDCardApplicationDir,
	"sd_card": fs.dirs.SDCardDir,
	"default": fs.dirs.DocumentDir
}

// TODO: update many other functions if needed
export default class FS {
	static download(url = '', savingDir = dirsMapping["default"]) {
		const options = {
			fileCache: true,
			addAndroidDownloads: {
				useDownloadManager: true,
				notification: false,
				path: `${savingDir}/${(new Date()).getTime()}.${FS.getFileExtension(url)}`,
				description:  capitalize(replaceLodash(Object.keys(dirsMapping).find((elem, index, arr) => arr[elem] === savingDir))) || 'Document'
			}
		}
		config(options).fetch('GET', url).then(res => console.log(res));
	}

	/* urlCount is a private func argument */
	static multiDownload(urlArr = [], savingDir = dirsMapping["default"], urlCount = urlArr.length) {
		if(!urlCount) {
			return;
		}

		FS.download(urlArr[urlCount - 1], savingDir).then(res => FS.multiDownload(urlArr, savingDir, urlCount - 1));
	}

	static getDefaultDir(dirname) {
		return dirname && dirsMapping[dirname] || dirsMapping["default"];
	}

	static getFileExtension(file) {
		return (/[.]/.exec(file)) ? /[^.]+$/.exec(file)[0] : undefined;
	}
}