import {config} from './wdio.conf'
import {join} from 'path'


config.specs = [
    './appTest/specs/androidTest/**/*.ts'
]


config.capabilities = [{
    'appium:platformName': 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Pixel 3',
    'appium:platformVersion': '11.0',
    'appium:app': join(__dirname, 'apps/Android-MyDemoApp.apk'),
    'appium:appPackage': 'com.saucelabs.mydemoapp.rn',
    'appium:appWaitActivity': 'com.saucelabs.mydemoapp.rn.MainActivity',
    'appium:noReset': true
}]

config.logLevel = 'info'
exports.config = config