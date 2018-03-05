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

const availableDirs = [
	"picture",
	"download",
	"main_bundle",
	"movie",
	"music",
	"lib",
	"cache",
	"dcim",
	"document",
	"sd_card_app",
	"sd_card",
	"default"
]

// TODO: update many other functions if needed
export default class FS {
	static download({uri, name, imgFormat}, savingDir = "default", method = 'GET') {
		const options = {
			fileCache: true,
			addAndroidDownloads: {
				useDownloadManager: true,
				notification: false,
				path: `${dirsMapping[savingDir]}/${(new Date()).getTime()}_${name || savingDir}.${imgFormat || FS.getFileExtension(uri)}`,
				description:  capitalize(replaceLodash(Object.keys(dirsMapping).find(elem => elem === savingDir))) || 'Document'
			}
		}

		return config(options).fetch(method, uri).catch(error => { throw new Error(error) });
	}

	/* uriCount is a private func argument */
	static multiDownload(imgArr = [], savingDir = "default", method = 'GET') {
		return Promise.all(imgArr.map(img => FS.download(img, savingDir, method)));
	}

	static getDefaultDir(dirname) {
		return dirname && dirsMapping[dirname] || availableDirs;
	}

	static getFileExtension(file) {
		return (/[.]/.exec(file)) ? /[^.]+$/.exec(file)[0] : undefined;
	}
}