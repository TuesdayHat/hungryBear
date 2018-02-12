import {bear} from './../src/bear.js';
import * as sinon from 'sinon';
const assert = require('assert');
// const babel = require ('babel-core');
const expect = require('chai').expect

describe('Bear', function() {
  let fuzzy = bear;
  var clock;

  beforeEach(function(){
    clock = sinon.useFakeTimers();
    fuzzy.foodLevel = 10;
    fuzzy.name = "Fuzzy";
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

  it("should return that the bear ate blueberries and the food level went up by 5", function() {
    expect(fuzzy.eatSmall("blueberries")).to.equal("The bear ate the blueberries! Food level goes up 5!");
    expect(fuzzy.foodLevel).to.equal(15);
  });

  // it('should have a food level of ten if it is fed', function() {
  //   clock.tick(9001);
  //   fuzzy.feed();
  //   expect(fuzzy.foodLevel).to.equal(10);
  // });

  // describe('', function(){
  //   it('should do the thing', function(){
  //     assert();
  //   });
  // });


});
