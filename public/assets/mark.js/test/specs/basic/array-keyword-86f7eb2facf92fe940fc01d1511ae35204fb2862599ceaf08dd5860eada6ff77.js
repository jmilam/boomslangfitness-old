"use strict";describe("basic mark with an array of keywords",function(){var a,r;beforeEach(function(t){loadFixtures("basic/array-keyword.html"),a=$(".basic-array-keyword"),r=[],new Mark(a[0]).mark(["lorem","ipsum","test","hey"],{diacritics:!1,separateWordSearch:!1,noMatch:function(a){r.push(a)},done:t})}),it("should wrap all matching keywords from the array",function(){expect(a.find("mark")).toHaveLength(8)}),it("should call noMatch for not found array items",function(){expect(r).toEqual(["test","hey"])})});