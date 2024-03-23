import {test} from '@playwright/test'

test.skip('Test one', async({page}) => {

})

test.skip('skip this test', async({page}) => {
    // This test will be skipped
  });
 
 
//will mark test as failure will show error if the test does not fail
 test('not yet ready', async({page}) => {
    test.fail();
  });
 
 // test will be aborted
 test.fixme('test to be fixed', async({page}) => {
  });
 
// marks the test as slow and triples the test timeout
 test('slow test', async({page}) => {
    test.slow();
  });
 
// runs specific tests
 //test.only('focus this test', async({page}) => {
    // Run only focused tests in the entire project
  //});



  //tags

  
test('Test full report @smoke', async({page}) => {
    //  npx playwright test --grep “@smoke”
    //npx playwright test ./e2e/AnnotationsAndTags.spec.js --project chromium --grep “@smoke”
    //npx playwright test ./e2e/AnnotationsAndTags.spec.js --project chromium --grep-invert “@smoke”
  });
 

