"use strict";describe("basic mark with filter callback",function(){var e;beforeEach(function(){loadFixtures("basic/filter.html"),e=$(".basic-filter")}),it("should call the callback with the right parameters",function(t){var r={lorem:0,ipsum:0,dolor:0},a=0,c=0;try{new Mark(e[0]).mark(Object.keys(r),{diacritics:!1,separateWordSearch:!1,filter:function(e,t,i,o){return expect(e.nodeType).toBe(3),expect($.inArray(t,Object.keys(r))).toBeGreaterThan(-1),expect(a).toBe(i),expect(r[t]).toBe(o),3!=++c&&(r[t]++,a++,!0)},done:function(){expect(e.find("mark")).toHaveLength(15),t()}})}catch(i){t.fail(i.message)}})});