"use strict";describe("mark with acrossElements and nested matches",function(){var e;beforeEach(function(s){loadFixtures("across-elements/nested/main.html"),e=$(".across-elements-nested"),new Mark(e[0]).mark("lorem ipsum",{diacritics:!1,separateWordSearch:!1,acrossElements:!0,done:s})}),it("should wrap matches",function(){expect(e.find("mark")).toHaveLength(7)})});