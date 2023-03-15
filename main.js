const { app, BrowserWindow, Menu, screen } = require('electron')

const createWindow = () => {
    const res = screen.getPrimaryDisplay().workAreaSize
    const win = new BrowserWindow({
        width: 160,
        height: 60,
        resizable: false,
        alwaysOnTop: true,
        minimizable: false,
        maximizable: false,
        skipTaskbar: true,
        transparent: true,
        opacity: 0.5,
        frame: false,
    })

    win.loadFile('./src/index.html')
    win.setPosition(res.width - 160, res.height - 60 - 50)
    Menu.setApplicationMenu(null)
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})