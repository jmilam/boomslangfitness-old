"use strict";describe("mark with range in iframes",function(){var e;beforeEach(function(t){loadFixtures("ranges/iframes.html"),e=$(".ranges-iframes"),new Mark(e[0]).markRanges([{start:14,length:5},{start:70,length:5},{start:82,length:7}],{iframes:!0,done:t})}),it("should mark correct range including iframes",function(){expect(e.find("mark")).toHaveLength(1),expect(e.find("iframe").contents().find("mark")).toHaveLength(2)})});