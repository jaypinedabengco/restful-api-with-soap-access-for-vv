const CONFIG = {
    math: {
        wsdl: 'http://www.dneonline.com/calculator.asmx?WSDL'
    },
    vv: {
        wsdl: process.env.VV_WSDL,        
        account_id: process.env.VV_ACCOUNT_ID,        
        password: process.env.VV_PASSWORD
    }
};

module.exports = CONFIG;