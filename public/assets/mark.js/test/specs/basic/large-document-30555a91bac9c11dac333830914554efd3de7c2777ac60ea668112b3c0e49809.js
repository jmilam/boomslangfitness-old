"use strict";describe("basic mark in large documents",function(){var e,t,n,a,r,i={isIe:function(){return-1!=navigator.appVersion.indexOf("MSIE")},navigator:navigator.appVersion,getVersion:function(){var e=999;return-1!=navigator.appVersion.indexOf("MSIE")&&(e=parseFloat(navigator.appVersion.split("MSIE")[1])),e}},o=i.isIe()&&i.getVersion()<=9?3e4:1e4;beforeEach(function(i){loadFixtures("basic/large-document.html"),e=$(".basic-large-document"),t=!1,n=new Date;try{new Mark(e[0]).mark("lorem",{diacritics:!1,separateWordSearch:!1,done:function(){a=new Date,r=a.getTime()-n.getTime(),i()}})}catch(o){t=!0}},6e4),it("should not throw a recursion error",function(){expect(t).toBe(!1)}),it("should wrap matches",function(){expect(e.find("mark")).toHaveLength(9569)}),it("should be faster than "+o+" ms",function(){expect(r).toBeLessThan(o)})});