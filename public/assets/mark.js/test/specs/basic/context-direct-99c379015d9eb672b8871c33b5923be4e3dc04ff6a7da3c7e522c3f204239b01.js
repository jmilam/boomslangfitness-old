"use strict";describe("basic mark directly inside the context",function(){var e;beforeEach(function(t){loadFixtures("basic/context-direct.html"),e=$(".basic-context-direct"),new Mark(e[0]).mark("lorem ipsum",{diacritics:!1,separateWordSearch:!1,done:function(){t()}})}),it("should wrap matches",function(){expect(e.find("mark")).toHaveLength(4)})});