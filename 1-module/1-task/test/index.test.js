const fs = require('fs');
const {EOL} = require('os');
const {execSync} = require('child_process');
const path = require('path');
const expect = require('chai').expect;

describe('1-module-1-task', () => {
  describe('Порядок вывода сообщений', () => {
    it('файл с решением должен быть в папке с задачей', () => {
      const isExists = fs.existsSync(path.join(__dirname, '../solution.txt'));
      expect(isExists).to.be.true;
    });

    it('порядок вывода совпадает', () => {
      const solution = fs.readFileSync(
          path.join(__dirname, '../solution.txt'),
          {
            encoding: 'utf-8',
          }
      ).replace(/(\r\n)|(\r)|(\n)/g, '\n');

      const output = execSync(`node ${path.join(__dirname, '../index.js')}`, {
        encoding: 'utf-8',
      });

      expect(solution.trim()).to.equal(output.trim());
    });
  });
});
