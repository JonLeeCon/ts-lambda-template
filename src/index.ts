process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

import * as AWS from "aws-sdk";

async function processEvent(event, context, callback) {
  try {
    return context.succeed();
  }
  catch (err) {
    console.error(err);
    return context.fail(err);
  }
}

/* MAIN */
function handler(event?, context?, callback?) {
  processEvent(event, context, callback);
}
exports.handler = handler;