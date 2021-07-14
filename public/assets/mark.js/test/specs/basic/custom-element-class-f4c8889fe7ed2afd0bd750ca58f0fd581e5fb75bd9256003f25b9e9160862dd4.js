"use strict";describe("basic mark with custom element and class",function(){var e,t;beforeEach(function(s){loadFixtures("basic/custom-element-class.html"),e=$(".basic-custom-element-class > div:first-child"),t=$(".basic-custom-element-class > div:last-child"),new Mark(e[0]).mark("lorem ipsum",{diacritics:!1,separateWordSearch:!1,element:"i",done:function(){new Mark(t[0]).mark("lorem ipsum",{diacritics:!1,separateWordSearch:!1,element:"i",className:"custom",done:s})}})}),it("should not add a class to matched elements if specified",function(){expect(e.find("i")).toHaveLength(4)}),it("should wrap matches with specified element and class",function(){expect(t.find("i.custom")).toHaveLength(4)})});