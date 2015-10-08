(function(d3) {
  // Setup
  var vis = d3.select('#wcgraph')
    .append('div');

  // Goal
  var goal = d3.select('#wcgraph').attr('data-goal');
  if (goal) {
    goal = parseInt(goal, 10);
  }

  d3.csv('wordcount.csv', function(data) {
    data.reverse();
    var max = parseInt(data[0].wordcount, 10);

    // Enter
    var entry = vis.selectAll('div.entry')
        .data(data)
      .enter().append('div')
        .classed('entry', true);

    // Date label
    entry.append('div')
      .classed('entry-label', true)
      .text(function(d) {
        return d.date;
      });

    // Wordcount bar
    entry.append('div')
      .classed('entry-bar', true)
      .style('width', function(d) {
        var wc = parseInt(d.wordcount, 10);
        return wc / max * 200 + 'px';
      })
      .text(function(d) {
        var width = parseInt(d.wordcount, 10) / max * 200;
        if (width < 50) {
          return '…';
        }
        return d.wordcount;
      })
      .attr('title', function(d) {
        var wc = parseInt(d.wordcount, 10);
        if (goal) {
          return wc + ' / ' + (wc / goal * 100) + '%';
        }
        return wc;
      });
  });
})(d3)
