// 在主进程中.
const {app, BrowserView, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const mainWindow = new BrowserWindow({
      width: 1000,
      height: 800,
      useContentSize: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
    // mainWindow.loadFile('index.html')
    mainWindow.loadURL("https://shangoue.meituan.com")
    
    // const view = new BrowserView()
    // mainWindow.setBrowserView(view)
    // view.setBounds({ x: 0, y: 0, width: 800, height: 600 })
    // view.setAutoResize({width: true, height: true})
    // view.webContents.loadURL('https://shangoue.meituan.com')
}


app.whenReady().then(() => {
    createWindow()
})
