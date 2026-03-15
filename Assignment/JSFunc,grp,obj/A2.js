function mergeSettings(savedSettingsJSON, defaultSettings) {
    const savedSettings = JSON.parse(savedSettingsJSON);
    const merged = {};
    for (let key in defaultSettings) {
        merged[key] = defaultSettings[key];
    }
    for (let key in savedSettings) {
        merged[key] = savedSettings[key];
    }
    return{
        mergedObject: merged,
        mergedJSON: JSON.stringify(merged)
    };
}
const defaultSettings = {
    notifications: true,
};
const savedSettingsJSON = '{"name":"varini"}';
const result = mergeSettings(savedSettingsJSON, defaultSettings);
console.log(result);