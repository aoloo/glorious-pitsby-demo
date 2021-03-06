const styles = '[data-form-container] { margin: 0 auto; max-width: 320px; }';

module.exports = {
  name: 'Form',
  description: 'Abstraction of a native form.',
  properties: [
    {
      name: 'onSubmit',
      type: '<Promise> Function',
      values: 'any',
      required: true
    },
    {
      name: 'on-submit-success',
      type: '<void> Function',
      values: 'any'
    },
    {
      name: 'on-submit-error',
      type: '<void> Function',
      values: 'any'
    },
    {
      name: 'success-message',
      type: 'String',
      values: 'any'
    },
    {
      name: 'error-message',
      type: 'String',
      values: 'any'
    }
  ],
  examples: [
    {
      title: 'Successful Form with Custom Success Message',
      controller: {
        data(){
          return {
            data: {}
          };
        },
        methods: {
          onSubmit(){
            // Fake request simulation
            return new Promise((resolve) => {
              const response = { status: 200, message: 'ok' };
              setTimeout(() => resolve(response), 3000);
            });
          },
          onSubmitSuccess(response){
            // Here's where you handle server response
            console.log(response);
            this.setData({});
          },
          setData(data){
            this.data = data;
          }
        }
      },
      template: `
      <div data-form-container>
        <pd-form
          :on-submit="onSubmit"
          :on-submit-success="onSubmitSuccess"
          success-message="Success! Your message has been sent."
        >
          <pd-row>
            <pd-col size="12">
              <pd-field label="Name">
                <pd-input name="name" v-model="data.name" required />
              </pd-field>
            </pd-col>
          </pd-row>
          <pd-row>
            <pd-col size="12">
              <pd-field label="Email">
                <pd-input type="email" name="email" v-model="data.email" required />
              </pd-field>
            </pd-col>
          </pd-row>
          <pd-row>
            <pd-col size="12">
              <pd-field label="Message">
                <pd-textarea name="message" v-model="data.message" required />
              </pd-field>
            </pd-col>
          </pd-row>
          <pd-row>
            <pd-col size="6">
              <pd-button type="submit" theme="primary" block>Send</pd-button>
            </pd-col>
            <pd-col size="6">
              <pd-button type="reset" block>Clear</pd-button>
            </pd-col>
          </pd-row>
        </pd-form>
      </div>`,
      styles
    },
    {
      title: 'Failing Form with Custom Error Message',
      controller: {
        data(){
          return {
            data: {}
          };
        },
        methods: {
          onSubmit(){
            // Fake request simulation
            return new Promise((resolve, reject) => {
              const response = { status: 500, message: 'Internal Server Error' };
              setTimeout(() => reject(response), 3000);
            });
          },
          onSubmitError(err){
            // Here's where you handle server error
            console.log(err);
          }
        }
      },
      template: `
      <div data-form-container>
        <pd-form
          :on-submit="onSubmit"
          :on-submit-error="onSubmitError"
          error-message="Ops, request failed."
        >
          <pd-row>
            <pd-col size="12">
              <pd-field label="Name">
                <pd-input name="name" v-model="data.name" required />
              </pd-field>
            </pd-col>
          </pd-row>
          <pd-row>
            <pd-col size="12">
              <pd-field label="Email">
                <pd-input type="email" name="email" v-model="data.email" required />
              </pd-field>
            </pd-col>
          </pd-row>
          <pd-row>
            <pd-col size="6" offset="3">
              <pd-button type="submit" theme="primary" block>Subscribe</pd-button>
            </pd-col>
          </pd-row>
        </pd-form>
      </div>`,
      styles
    }
  ]
};
