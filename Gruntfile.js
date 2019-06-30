module.exports = function(grunt) {

    // Load the plugin that provides the "grunt-aws" task.
    grunt.loadNpmTasks('grunt-aws');

    
    grunt.initConfig({

        aws: grunt.file.readJSON("aws-keys.json"),

        s3: {
            options: {
                accessKeyId: "<% aws.AWSAccessKeyId %>",
                secretAccessKey: "<%= aws.AWSSecretKey %>",
                bucket: "alexglaze.tech"
            },
            build: {
                cwd: "build",
                src: "**"
            }
        },

        // cloudfront: {
        //     options: {
        //       accessKeyId: "<% aws.AWSAccessKeyId %>",
        //       secretAccessKey: "<%= aws.AWSSecretKey %>",
        //       distributionId: "...",
        //       invalidations: [
        //         "/index.html"
        //       ]
        //     },
        //     invalidate: {}
        //   },
      
        //   sns: {
        //     options: {
        //       accessKeyId: "<% aws.AWSAccessKeyId %>",
        //       secretAccessKey: "<%= aws.AWSSecretKey %>",
        //       region: "...",
        //       target: "...",
        //       message: "...",
        //       subject: "..."
        //     }
        //   }
    });

     

   grunt.registerTask("deploy", "s3");
};
