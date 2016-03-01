///<reference path='../../typings/main/ambient/chai/chai.d.ts' />
///<reference path='../../typings/main/ambient/mocha/mocha.d.ts' />

import { expect } from 'chai';

import main, {Funk} from '../../lib/index';
console.log(Funk);
describe('suite', () => {

  it('should', () => {
    const funk: Funk = new Funk('shit', 'bang');
    console.log(funk);
    console.log(funk.prop);
    expect(main()).to.equal('BUNG!');
    expect(2).to.equal(2);

  });

});