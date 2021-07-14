"use strict";describe("basic mark with regex characters",function(){var e;beforeEach(function(t){loadFixtures("basic/escape.html"),e=$(".basic-escape"),new Mark(e[0]).mark(["39,00 \u20ac","0.009 \u20ac","Unk?nown","Some+>thing","www.happy.com\\"],{diacritics:!1,separateWordSearch:!1,done:function(){t()}})}),it("should escape search terms and wrap matches",function(){expect(e.find("mark")).toHaveLength(5)}),it("should not modify text node values",function(){expect(e.find("mark").get(0)).toContainText("39,00 \u20ac"),expect(e.find("mark").get(1)).toContainText("0.009 \u20ac"),expect(e.find("mark").get(2)).toContainText("Unk?nown"),expect(e.find("mark").get(3)).toContainText("Some+>thing"),expect(e.find("mark").get(4)).toContainText("www.happy.com\\")})});