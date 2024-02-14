import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { aws_s3 as s3 } from 'aws-cdk-lib';

export class S3CreateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'S3CreateQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // create a new s3 bucket
    const myBucket = new s3.Bucket(this, 'mini3-bucket', {
      versioned: true,
      // update my mini3-bucket s3 bucket properties to add bucket properties encryption
      encryption: s3.BucketEncryption.KMS_MANAGED
    });

  }
}
