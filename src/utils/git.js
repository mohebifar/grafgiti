import path from 'path';
import fs from 'fs';
//const basePath = process.cwd();
const basePath = '/Users/mohebifar/Projects/havijoori';
const simpleGit = require('simple-git')(basePath);

const dummyFilePath = path.join(basePath, 'DUMMY');

export function dummyCommit(day) {
  return new Promise((resolve, reject) => {
    //resolve();
    fs.writeFile(dummyFilePath, Math.random().toString(), (err) => {
      if (err) {
        reject(err);
      } else {
        simpleGit.add(dummyFilePath, () => {
          simpleGit.commit('Dummy', dummyFilePath, {'--date': day.time.format()}, resolve);
        });
      }
    });
  });
}
