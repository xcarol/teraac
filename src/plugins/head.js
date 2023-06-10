/* eslint-disable no-param-reassign */
class Head {
  webDocument = document;

  metaDescription = document.querySelector('meta[name="description"]');

  changeTitle(title, description) {
    this.webDocument.title = `Teraac | ${title ? this.$t(title) : 'Bosch Car Service'}`;
    if (this.metaDescription) {
      this.metaDescription.setAttribute('content', this.$t(description || 'motto'));
    }
  }
}

const head = new Head();

const HeadPlugin = {
  install(app, options) {
    app.config.globalProperties.head = head;
    head.$t = options.$t;
  },
};

export default HeadPlugin;
