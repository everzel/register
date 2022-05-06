import ToolboxIcon from './svg/toolbox.svg';
import './index.css';

/**
 * Register Tool for the Editor.js
 */
export default class Register {
  /**
   * @param data
   * @param config
   * @param api
   */
  constructor({ data, config, api }) {
    this.api = api;

    this.nodes = {
      wrapper: null,
      when: null,
      where: null,
      forWhom: null,
      cost: null,
      how: null,
      next: null,
      url: null
    };

    this.data = data;
  }

  /**
   * @returns {{icon: *, title: string}}
   */
  static get toolbox() {
    return {
      icon: ToolboxIcon,
      title: 'Реєстрація'
    };
  }

  /**
   * Tool's CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      loader: this.api.styles.loader,

      /**
       * Tool's classes
       */
      wrapper: 'cdx-register',
      block: 'cdx-register__block',
      blockName: 'cdx-register__block_name',
      blockInput: 'cdx-register__block_input',
      title: 'cdx-register__title'
    };
  }

  /**
   * @param toolsContent
   * @returns {*}
   */
  save(toolsContent) {
    const when = (this.nodes.when.innerHTML || '').trim();
    const where = (this.nodes.where.innerHTML || '').trim();
    const forWhom = (this.nodes.forWhom.innerHTML || '').trim();
    const cost = (this.nodes.cost.innerHTML || '').trim();
    const how = (this.nodes.how.innerHTML || '').trim();
    const next = (this.nodes.next.innerHTML || '').trim();
    const url = (this.nodes.url.innerHTML || '').trim();

    Object.assign(this.data, { when, where, forWhom, cost, how, next, url });

    return this.data;
  }

  /**
   * @returns {null}
   */
  render() {
    const { when, where, forWhom, cost, how, next, url } = this.data;

    this.nodes.wrapper = this.make('div', [this.CSS.baseClass, this.CSS.wrapper]);

    this.nodes.wrapper.appendChild(
      this.make('div', [ this.CSS.title ], {
        contentEditable: false,
        innerHTML: 'Картка реєстрації'
      })
    );

    this.nodes.when = this.make('div', [this.CSS.blockInput, this.CSS.input], {
      contentEditable: true,
      innerHTML: when || ''
    });

    this.nodes.wrapper.appendChild(this.make('div', [ this.CSS.blockName ], {
      innerHTML: 'Коли олімпіада'
    }));

    this.nodes.wrapper.appendChild(this.nodes.when);

    //
    this.nodes.where = this.make('div', [this.CSS.blockInput, this.CSS.input], {
      contentEditable: true,
      innerHTML: where || ''
    });

    this.nodes.wrapper.appendChild(this.make('div', [ this.CSS.blockName ], {
      innerHTML: 'Де відбудеться'
    }));

    this.nodes.wrapper.appendChild(this.nodes.where);

    //
    this.nodes.forWhom = this.make('div', [this.CSS.blockInput, this.CSS.input], {
      contentEditable: true,
      innerHTML: forWhom || ''
    });

    this.nodes.wrapper.appendChild(this.make('div', [ this.CSS.blockName ], {
      innerHTML: 'Для кого'
    }));

    this.nodes.wrapper.appendChild(this.nodes.forWhom);

    //
    this.nodes.cost = this.make('div', [this.CSS.blockInput, this.CSS.input], {
      contentEditable: true,
      innerHTML: cost || ''
    });

    this.nodes.wrapper.appendChild(this.make('div', [ this.CSS.blockName ], {
      innerHTML: 'Вартість участі'
    }));

    this.nodes.wrapper.appendChild(this.nodes.cost);

    //
    this.nodes.how = this.make('div', [this.CSS.blockInput, this.CSS.input], {
      contentEditable: true,
      innerHTML: how || ''
    });

    this.nodes.wrapper.appendChild(this.make('div', [ this.CSS.blockName ], {
      innerHTML: 'Як взяти участь'
    }));

    this.nodes.wrapper.appendChild(this.nodes.how);

    //
    this.nodes.next = this.make('div', [this.CSS.blockInput, this.CSS.input], {
      contentEditable: true,
      innerHTML: next || ''
    });

    this.nodes.wrapper.appendChild(this.make('div', [ this.CSS.blockName ], {
      innerHTML: 'Що далі?'
    }));

    this.nodes.wrapper.appendChild(this.nodes.next);

    this.nodes.url = this.make('div', [this.CSS.blockInput, this.CSS.input], {
      contentEditable: true,
      innerHTML: url || ''
    });

    this.nodes.wrapper.appendChild(this.make('div', [ this.CSS.blockName ], {
      innerHTML: 'URL для кнопки'
    }));

    this.nodes.wrapper.appendChild(this.nodes.url);

    return this.nodes.wrapper;
  }

  /**
   * @param savedData
   * @returns {boolean}
   */
  validate(savedData) {
    console.log(savedData.when.trim());
    return savedData.when.trim() !== '' &&
           savedData.where.trim() !== '' &&
           savedData.forWhom.trim() !== '' &&
           savedData.cost.trim() !== '' &&
           savedData.how.trim() !== '' &&
           savedData.next.trim() !== '';
  }

  /**
   * @param string
   * @returns {boolean}
   */
  isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return (url.protocol === 'http:' || url.protocol === 'https:') && (url.href == string || url.origin == string);
  }

  /**
   * Helper method for elements creation
   * @param tagName
   * @param classNames
   * @param attributes
   * @return {HTMLElement}
   */
  make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }
}
