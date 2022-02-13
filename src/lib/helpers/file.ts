import fs from 'fs';

export const readDir = (path: string): Promise<string[]> => {
	return new Promise((rslv, rjct) => {
		fs.readdir(path, (err, data) => {
			if (err) {
				rjct(err);
			} else {
				rslv(data);
			}
		});
	});
};

export const readFile = (path: string): Promise<string> => {
	return new Promise((rslv, rjct) => {
		fs.readFile(path, (err, data) => {
			if (err) {
				rjct(err);
			} else {
				rslv(data.toString());
			}
		});
	});
};

export const getFileName = (file: string): string => file.split('.').slice(0, -1).join('.');
