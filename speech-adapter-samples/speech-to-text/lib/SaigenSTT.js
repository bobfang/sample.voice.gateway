//import { RecognizeStream } from './SaigenRecognizeStream';
const RecognizeStream = require('./SaigenRecognizeStream');

class SaigenSTT {
  constructor(config = {}) {
    this.url = config.url;
    this.username = config.username;
    this.passsword = config.password;
    this.port = config.port;
    console.log(`Created STT with url: ${this.url}`);
  }

  /**
   * Replaces recognizeLive & friends with a single 2-way stream over websockets
   *
   * @param {Object} params The parameters
   * @return {RecognizeStream}
   */
  createRecognizeStream(params) {
    // eslint-disable-next-line no-param-reassign
    params = params || {};
    // eslint-disable-next-line no-param-reassign
    params.url = this.url;
    console.log(`Created STT recognizeStream with url: ${this.url}`);
    return new RecognizeStream(params);
  }
}

module.exports = SaigenSTT;
