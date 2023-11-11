import {config} from './wdio.conf'
import {join} from 'path'


config.specs = [
    './appTest/specs/iosTest/**/*.ts'
]


config.capabilities = [  {
    'appium:platformName': 'iOs',
    'appium:automationName': 'XCUITest',
    'appium:deviceName': 'iPhone SE',
    'appium:platformVersion': '16.0',
    'appium:app': join(__dirname, 'apps/Android-MyDemoApp.apk'),
    'appium:bundleId': 'com.saucelabs.mydemoapp.rn',
    'appium:noReset': true
}]


config.logLevel = 'info'

exports.config = config