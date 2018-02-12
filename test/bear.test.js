import {HungryBear} from './../src/bear.js';
import * as sinon from 'sinon';
const assert = require('assert');
// const babel = require ('babel-core');
const expect = require('chai').expect

describe('Bear', function() {
  let fuzzy = new HungryBear("Fuzzy");
  var clock;

  beforeEach(function(){
    clock = sinon.useFakeTimers();
    fuzzy.setHunger();
  });
  afterEach(function () {
    clock.restore();
  });


  it('should have a name and a food level of 10 when it is created', function() {
      expect(fuzzy.name).to.equal("Fuzzy");
      expect(fuzzy.foodLevel).to.equal(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    clock.tick(3001);
    expect(fuzzy.foodLevel).to.equal(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).to.equal(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    clock.tick(10001);
    expect(fuzzy.didYouGetEaten()).to.equal(true);
  });

  it('should have a food level of ten if it is fed', function() {
    clock.tick(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).to.equal(10);
  });
  // describe('', function(){
  //   it('should do the thing', function(){
  //     assert();
  //   });
  // });


});
