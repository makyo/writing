var Paginator = (function($) {
  /*
  A simple Paginator for a list of items.

  Use the Paginator like so:

  <div id="pages">
    <div class="items"></div>
    <div>
      <span class="prevLink">&larr;</span>
      <span class="pageLinks"></span>
      <span class="nextLink">&rarr;</span>
    </div>
  </div>
  <script type="text/javascript" src="jquery.js"></script>
  <script type="text/javascript" src="paginator.js"></script>
  <script type="text/javascript" src="yourCompiledHandlebarsTemplate.js"></script>
  <script type="text/javascript">
    // If you'd like to use the location.hash to store the current page, use the following line:
    Paginator.prototype.useHash = true;

    var p = new Paginator(listOfItems, '#pages', Handlebars.templates.yourTemplate);
  </script>
  */
  function Paginator(list, pageElement, pageTemplate) {
    this.list = list;
    this.lastPage = Math.ceil(this.list.length / this.itemsPerPage) - 1;
    this.el = $(pageElement);
    this.pageTemplate = pageTemplate;
    this.pageNumber = window.location.hash && this.useHash ?
      parseInt(window.location.hash.split('#')[1], 10) - 1 : 0;

    var self = this;

    // Build the page numbers list
    for (var i = 0; i <= this.lastPage; i++) {
      this.el.find('.pageLinks')
        .append('<a href="javascript:void(0)" data-pagenumber="' + i +
          '" class="pageLink page' + i + '">' + (i + 1) + '</a> ');
      this.el.find('.pageLinks .page' + i).click(function() {
        self.setPage(parseInt($(this).data('pagenumber'), 10));
      });
    }

    // Build the first page
    this.setPage(this.pageNumber);
  };

  // Number of items to show on a page
  Paginator.prototype.itemsPerPage = 5;

  // Whether or not to use the location.hash to store the current page
  Paginator.prototype.useHash = false;

  Paginator.prototype.setPage = function(pageNumber) {
    if (pageNumber < 0 || pageNumber > this.lastPage) {
      return;
    }
    this.pageNumber = pageNumber;
    if (this.useHash) {
      window.location.hash = pageNumber + 1;
    }
    this._buildPage();
  };

  Paginator.prototype._buildPage = function() {
    var page = this.list.slice(this.pageNumber * this.itemsPerPage,
        this.pageNumber * this.itemsPerPage + this.itemsPerPage);
    var self = this;

    if (this.pageNumber === this.lastPage) {
      // Disable next link
      this.el.find('.nextLink').addClass('disabled')
        .unbind('click');
    } else {
      // Enable next link
      this.el.find('.nextLink').removeClass('disabled')
        .unbind('click')
        .click(function() {
          self.setPage(self.pageNumber + 1);
        });
    }

    if (this.pageNumber === 0) {
      // Disable prev link
      this.el.find('.prevLink').addClass('disabled')
        .unbind('click');
    } else {
      // Enable prev link
      this.el.find('.prevLink').removeClass('disabled')
        .unbind('click')
        .click(function() {
          self.setPage(self.pageNumber - 1);
        });
    }

    // Set the current pagelink to .active
    this.el.find('.pageLink.active').removeClass('active');
    this.el.find('.pageLink.page' + this.pageNumber)
      .addClass('active');

    // Render the page
    this.el.find('.items').html(this.pageTemplate({items: page}));
  };

  return Paginator;
})(jQuery);

