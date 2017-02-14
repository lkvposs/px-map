(function(){
  'use strict';

  class PxMapInfoPopup {
    /* Name for the component */
    get is() {
      return 'px-map-info-popup';
    }

    /* Behaviors to import for this component */
    get behaviors() {
      const ns = window.PxMapBehavior;
      return [
        ns.ElementInstance,
        ns.PopupInstance
      ];
    }

    /* Properties for this component */
    get properties() {
      return {
        /**
         * Title text to display in bold at the top of the popup. Should be kept
         * relatively short (25 characters or less) to keep the popup from
         * growing too large.
         *
         * @type {String}
         */
        title: {
          type: String,
          observer: '_updatePopupContent'
        },

        /**
         * Description text to place in the body of the popup. Try to keep the
         * description to a reasonable size to keep the popup from growing
         * too large.
         *
         * To display more information, bind to the popup's
         * `active` property for notifications on when this popup is shown
         * and display additional information in the UI of your app.
         *
         * @type {String}
         */
        description: {
          type: String,
          observer: '_updatePopupContent'
        },

        /**
         * The URL for an image to place inside the popup. Use a small, square
         * thumbnail-style image (e.g. 75px by 75px).
         *
         * @type {String}
         */
        imgSrc: {
          type: String,
          observer: '_updatePopupContent'
        }
      }
    }

    _createPopup() {
      const options = this._getPopupOptions({ className: 'map-info-popup' });
      const content = this._getPopupContent();
      return L.popup(options).setContent(content);
    }

    _getPopupOptions(defaults={}) {
      const options = defaults;
      return options;
    }

    /**
     * Retrieves popup content from the light DOM and cleans it up preparing
     * for insertion into the popup instnace.
     *
     * @return {String} Stringified HTML
     */
    _getPopupContent() {
      return Polymer.dom(this.root).innerHTML.trim();
    }
  }

  /* Register this component with the Polymer constructor. */
  Polymer(PxMapInfoPopup);
})();
