it.only('login test',function()
{
         

        cy.visit('https://magento.softwaretestingboard.com/ ')

        cy.get('body')
        .should('have.attr', 'data-container', 'body')
      
        .find('div.page-wrapper')
        .find('header.page-header')
        .find('div.panel.wrapper')
        .find('div.panel.header').find('ul.header.links')
       // .find('li.authorization-link')
        .find('li')
        .find('a').contains('Create an Account').click()

        cy.contains('button', 'Create an Account').click();
        //cy.get('#firstname').type('Sowji@',{force: true})
        const fields = [
          { selector: '#firstname', error: '#firstname-error', message: 'This is a required field.', value: 'Joohnnn' },
          { selector: '#lastname', error: '#lastname-error', message: 'This is a required field.', value: 'Doee' },
          { selector: '#email_address', error: '#email_address-error', message: 'This is a required field.', value: 'johhnn.doee3@example.com' },
          { selector: '#password', error: '#password-error', message: 'This is a required field.', value: 'joe@12345' },
         // { selector: '#password', error: '#password-error', message: 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.', value: 'joe@12345' },
          { selector: '#password-confirmation', error: '#password-confirmation-error', message: 'This is a required field.', value: 'joe@12345' },
          
        //{ selector: '#password-confirmation', error: '#password-confirmation-error', message: 'Please enter the same value again.', value: 'joe@12345' },
        

        ];

        cy.on('uncaught:exception', (err) => {
          cy.log(`JavaScript Error Detected: ${err.message}`);
          return false; 
        });
    
        fields.forEach(({ selector, error, message, value }) => {
          cy.get(selector).clear(); // Clear existing value
          cy.get(selector).focus().blur(); // Trigger validation
        });
            
    
        fields.forEach(({ selector, error, message, value }) => {
          cy.get('body').then(($body) => {
            if ($body.find(error).length > 0) {
              // If error exists, verify it and enter data
              cy.get(error).should('be.visible').and('contain.text', message);
              cy.get(selector).type(value);

            } else {
              cy.log(`No error found for ${selector}, skipping data entry.`);
             // cy.contains('button', 'Create an Account').click();
            }
          });
         
          cy.contains('button', 'Create an Account').click();
          });

          const emailField = fields.find(field => field.selector === '#email');
          cy.contains('button', 'Change').click();    
          cy.get('body')
        .should('have.attr', 'data-container', 'body')
      
        .find('div.page-wrapper')
        .find('header.page-header')
        .find('div.panel.wrapper')
        .find('div.panel.header').find('ul.header.links')
        .find('li.authorization-link')
        //.find('li')
        .find('a').contains('Sign Out').click()

        cy.wait(6000);

        cy.get('body')
        .should('have.attr', 'data-container', 'body')
      
        .find('div.page-wrapper')
        .find('header.page-header')
        .find('div.panel.wrapper')
        .find('div.panel.header').find('ul.header.links')
        .find('li.authorization-link')
        //.find('li')
        .find('a').contains('Sign In').click()

        cy.get(emailField.selector).clear().type(emailField.value);
        cy.get('#pass').type('joe@12345')
  });






        
