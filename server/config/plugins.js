module.exports = () => ({
    upload: {
        config: {
            provider:"aws-s3",
            providerOptions: {
                
                acessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_ACCESS_SECRET,
                region: process.env.AWS_REGION,
                params: {
                    Bucket: process.env.AWS_BUCKET,
                    
                },
            }
        }
    }
});
