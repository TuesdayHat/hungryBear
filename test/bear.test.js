import {HungryBear} from './../src/bear.js';
import * as sinon from 'sinon';
const assert = require('assert');
const babel = require ('babel-core');
const expect = require('chai').expect

describe('Bear', function() {
  let fuzzy = new HungryBear("Fuzzy");
  var clock;

  beforeEach(function(){
    clock = sinon.useFakeTimers();
  });
  afterEach(function () {
    clock.restore();
  });


  it('should have a name and a food level of 10 when it is created', function() {
      expect(fuzzy.name).to.equal("Fuzzy");
      expect(fuzzy.foodLevel).to.equal(10);
  });
  // describe('', function(){
  //   it('should do the thing', function(){
  //     assert();
  //   });
  // });


});
