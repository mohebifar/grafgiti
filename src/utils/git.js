import fs from 'fs';
import simpleGit from 'simple-git';
import { gitPath, dummyFilePath } from 'config';

const git = simpleGit(gitPath);

export function dummyCommit(day) {
  return new Promise((resolve, reject) => {
    fs.writeFile(dummyFilePath, Math.random().toString(), (err) => {
      if (err) {
        reject(err);
      } else {
        git.add(dummyFilePath, () => {
          git.commit('Dummy', dummyFilePath, {'--date': day.time.format()}, resolve);
        });
      }
    });
  });
}
