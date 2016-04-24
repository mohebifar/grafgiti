import path from 'path';
export const verticalCellSpacing = 0;
export const horizontalCellSpacing = 1;
export const width = (1 + horizontalCellSpacing) * 52 + 2;
export const height = (1 + verticalCellSpacing) * 7 + 2;
export const gitPath = process.cwd();
export const logFile = path.join(gitPath, 'grafgiti.log');
export const dummyFilePath = path.join(gitPath, 'DUMMY');
export const defaultCoefficient = process.env.COEFFICIENT || 5;
