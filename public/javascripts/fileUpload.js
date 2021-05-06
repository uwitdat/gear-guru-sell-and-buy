FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

// FilePond.setOptions({
//     // stylePanelAspectRatio: 150 / 100
//     imageResizeTargetWidth: 300,
//     imageResizeTargetHeight: 250
// })

FilePond.parse(document.body);