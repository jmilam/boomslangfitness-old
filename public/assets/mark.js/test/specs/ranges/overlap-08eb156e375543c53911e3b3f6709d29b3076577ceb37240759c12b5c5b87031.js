"use strict";describe("mark ranges ignoring overlapping values",function(){var t;beforeEach(function(a){loadFixtures("ranges/overlap.html"),t=$(".ranges-overlap"),new Mark(t[0]).markRanges([{start:0,length:30},{start:25,length:1},{start:40,length:10},{start:45,length:1}],{each:function(t,a){$(t).attr("data-range-start",a.start)},done:a})}),it("should ignore overlapping ranges",function(){expect(t.find("mark")).toHaveLength(3),expect(t.find("mark[data-range-start=25]")).toHaveLength(0),expect(t.find("mark[data-range-start=45]")).toHaveLength(0)})});