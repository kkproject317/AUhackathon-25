/**
 * CropGuard - Cyber-Resilient Agriculture Monitoring Platform
 * Single AngularJS Application File with Mock Data
 */

(function() {
    'use strict';

    // ============================================
    // MOCK DATA (Based on API responses)
    // ============================================
    // Set USE_MOCK_DATA to true to use mock data, false to use real API
    const USE_MOCK_DATA = true;
    
    var MOCK_DATA = {
    //     user: {
    //         id: 1,
    //         name: 'Nidhi Patel',
    //         email: 'nidhipatel2005@gmail.com',
    //         role: 'Farmer',
    //         created_at: '2024-01-15T10:30:00Z'
    //     },
    //     farms: [
    //         { id: 1, name: 'Green Valley Farm', area: 150.5, latitude: 28.6139, longitude: 77.2090, is_active: true, created_at: '2024-01-10T08:00:00Z' },
    //         { id: 2, name: 'Sunrise Organic Farm', area: 200.0, latitude: 19.0760, longitude: 72.8777, is_active: true, created_at: '2024-01-12T09:30:00Z' },
    //         { id: 3, name: 'Krishna Agro Fields', area: 175.25, latitude: 13.0827, longitude: 80.2707, is_active: true, created_at: '2024-01-14T11:00:00Z' },
    //         { id: 4, name: 'Punjab Golden Harvest', area: 300.0, latitude: 31.1471, longitude: 75.3412, is_active: true, created_at: '2024-01-16T14:00:00Z' },
    //         { id: 5, name: 'Deccan Plateau Farm', area: 125.75, latitude: 17.3850, longitude: 78.4867, is_active: false, created_at: '2024-01-18T16:30:00Z' }
    //     ],
    //     devices: [
    //         { id: 1, name: 'Soil Sensor Alpha', type: 'Soil Sensor', farm_id: 1, farm_name: 'Green Valley Farm', os: 'SensorOS 2.1', is_active: true, baseline_lat: 28.6139, baseline_long: 77.2090, last_seen: '2024-01-20T10:00:00Z', created_at: '2024-01-10T08:30:00Z', owner_user_id: 1 },
    //         { id: 2, name: 'Weather Station Beta', type: 'Weather Station', farm_id: 1, farm_name: 'Green Valley Farm', os: 'WeatherOS 3.0', is_active: true, baseline_lat: 28.6145, baseline_long: 77.2095, last_seen: '2024-01-20T09:55:00Z', created_at: '2024-01-10T09:00:00Z', owner_user_id: 1 },
    //         { id: 3, name: 'Irrigation Controller 01', type: 'Controller', farm_id: 2, farm_name: 'Sunrise Organic Farm', os: 'IrrigateOS 1.5', is_active: true, baseline_lat: 19.0760, baseline_long: 72.8777, last_seen: '2024-01-20T09:45:00Z', created_at: '2024-01-12T10:00:00Z', owner_user_id: 1 },
    //         { id: 4, name: 'Gateway Hub Central', type: 'Gateway', farm_id: 2, farm_name: 'Sunrise Organic Farm', os: 'GatewayOS 4.2', is_active: true, baseline_lat: 19.0765, baseline_long: 72.8780, last_seen: '2024-01-20T09:50:00Z', created_at: '2024-01-12T10:30:00Z', owner_user_id: 1 },
    //         { id: 5, name: 'Soil Sensor Gamma', type: 'Soil Sensor', farm_id: 3, farm_name: 'Krishna Agro Fields', os: 'SensorOS 2.1', is_active: true, baseline_lat: 13.0827, baseline_long: 80.2707, last_seen: '2024-01-20T09:40:00Z', created_at: '2024-01-14T11:30:00Z', owner_user_id: 1 },
    //         { id: 6, name: 'Weather Station Delta', type: 'Weather Station', farm_id: 3, farm_name: 'Krishna Agro Fields', os: 'WeatherOS 3.0', is_active: false, baseline_lat: 13.0830, baseline_long: 80.2710, last_seen: '2024-01-19T18:00:00Z', created_at: '2024-01-14T12:00:00Z', owner_user_id: 1 },
    //         { id: 7, name: 'Irrigation Controller 02', type: 'Controller', farm_id: 4, farm_name: 'Punjab Golden Harvest', os: 'IrrigateOS 1.5', is_active: true, baseline_lat: 31.1471, baseline_long: 75.3412, last_seen: '2024-01-20T09:30:00Z', created_at: '2024-01-16T14:30:00Z', owner_user_id: 1 },
    //         { id: 8, name: 'Gateway Hub North', type: 'Gateway', farm_id: 4, farm_name: 'Punjab Golden Harvest', os: 'GatewayOS 4.2', is_active: true, baseline_lat: 31.1475, baseline_long: 75.3415, last_seen: '2024-01-20T09:35:00Z', created_at: '2024-01-16T15:00:00Z', owner_user_id: 1 },
    //         { id: 9, name: 'Soil Sensor Epsilon', type: 'Soil Sensor', farm_id: 5, farm_name: 'Deccan Plateau Farm', os: 'SensorOS 2.0', is_active: false, baseline_lat: 17.3850, baseline_long: 78.4867, last_seen: '2024-01-18T20:00:00Z', created_at: '2024-01-18T17:00:00Z', owner_user_id: 1 },
    //         { id: 10, name: 'Weather Station Zeta', type: 'Weather Station', farm_id: 5, farm_name: 'Deccan Plateau Farm', os: 'WeatherOS 2.5', is_active: false, baseline_lat: 17.3855, baseline_long: 78.4870, last_seen: '2024-01-18T19:30:00Z', created_at: '2024-01-18T17:30:00Z', owner_user_id: 1 }
    //     ],
    //     records: [
    //         { id: 1, event_id: 'EVT-001', device_id: 1, device_name: 'Soil Sensor Alpha', farm_id: 1, farm_name: 'Green Valley Farm', prediction: 'Normal', anomaly_score: 0.12, confidence: 0.95, response_action: 'None', latitude: 28.6139, longitude: 77.2090, reasons: 'All sensor readings within expected parameters. Soil moisture at 45%, temperature at 22°C.', processed_at: '2024-01-20T10:00:00Z', asset_type: 'Soil Sensor', action_type: 'Read', resource_type: 'Sensor Data', authorization_status: 'Authorized' },
    //         { id: 2, event_id: 'EVT-002', device_id: 2, device_name: 'Weather Station Beta', farm_id: 1, farm_name: 'Green Valley Farm', prediction: 'Normal', anomaly_score: 0.08, confidence: 0.97, response_action: 'None', latitude: 28.6145, longitude: 77.2095, reasons: 'Weather data consistent with regional forecasts. No anomalies detected.', processed_at: '2024-01-20T09:55:00Z', asset_type: 'Weather Station', action_type: 'Read', resource_type: 'Weather Data', authorization_status: 'Authorized' },
    //         { id: 3, event_id: 'EVT-003', device_id: 3, device_name: 'Irrigation Controller 01', farm_id: 2, farm_name: 'Sunrise Organic Farm', prediction: 'Suspicious', anomaly_score: 0.45, confidence: 0.82, response_action: 'Alert Sent', latitude: 19.0760, longitude: 72.8777, reasons: 'Unusual command sequence detected. Water flow rate 20% higher than scheduled. Possible misconfiguration or unauthorized access attempt.', processed_at: '2024-01-20T09:45:00Z', asset_type: 'Controller', action_type: 'Write', resource_type: 'Control Command', authorization_status: 'Suspicious' },
    //         { id: 4, event_id: 'EVT-004', device_id: 4, device_name: 'Gateway Hub Central', farm_id: 2, farm_name: 'Sunrise Organic Farm', prediction: 'Normal', anomaly_score: 0.15, confidence: 0.91, response_action: 'None', latitude: 19.0765, longitude: 72.8780, reasons: 'Network traffic patterns normal. All connected devices responding within expected latency.', processed_at: '2024-01-20T09:50:00Z', asset_type: 'Gateway', action_type: 'Read', resource_type: 'Network Traffic', authorization_status: 'Authorized' },
    //         { id: 5, event_id: 'EVT-005', device_id: 5, device_name: 'Soil Sensor Gamma', farm_id: 3, farm_name: 'Krishna Agro Fields', prediction: 'Anomaly', anomaly_score: 0.78, confidence: 0.88, response_action: 'Device Isolated', latitude: 13.0827, longitude: 80.2707, reasons: 'GPS location drift detected (>500m from baseline). Possible device tampering or relocation. Sensor readings inconsistent with neighboring devices.', processed_at: '2024-01-20T09:40:00Z', asset_type: 'Soil Sensor', action_type: 'Read', resource_type: 'Location Data', authorization_status: 'Unauthorized' },
    //         { id: 6, event_id: 'EVT-006', device_id: 6, device_name: 'Weather Station Delta', farm_id: 3, farm_name: 'Krishna Agro Fields', prediction: 'Anomaly', anomaly_score: 0.85, confidence: 0.92, response_action: 'Device Isolated', latitude: 13.0830, longitude: 80.2710, reasons: 'Device offline for extended period. Last known readings showed temperature spike inconsistent with regional data. Possible hardware failure or cyber attack.', processed_at: '2024-01-19T18:00:00Z', asset_type: 'Weather Station', action_type: 'Read', resource_type: 'Sensor Data', authorization_status: 'Unauthorized' },
    //         { id: 7, event_id: 'EVT-007', device_id: 7, device_name: 'Irrigation Controller 02', farm_id: 4, farm_name: 'Punjab Golden Harvest', prediction: 'Normal', anomaly_score: 0.10, confidence: 0.96, response_action: 'None', latitude: 31.1471, longitude: 75.3412, reasons: 'Irrigation schedule executed as planned. Water consumption within expected range.', processed_at: '2024-01-20T09:30:00Z', asset_type: 'Controller', action_type: 'Write', resource_type: 'Control Command', authorization_status: 'Authorized' },
    //         { id: 8, event_id: 'EVT-008', device_id: 8, device_name: 'Gateway Hub North', farm_id: 4, farm_name: 'Punjab Golden Harvest', prediction: 'Suspicious', anomaly_score: 0.52, confidence: 0.79, response_action: 'Alert Sent', latitude: 31.1475, longitude: 75.3415, reasons: 'Unusual login attempt from unrecognized IP address. Authentication successful but access pattern differs from historical baseline.', processed_at: '2024-01-20T09:35:00Z', asset_type: 'Gateway', action_type: 'Access', resource_type: 'Authentication', authorization_status: 'Suspicious' },
    //         { id: 9, event_id: 'EVT-009', device_id: 9, device_name: 'Soil Sensor Epsilon', farm_id: 5, farm_name: 'Deccan Plateau Farm', prediction: 'Anomaly', anomaly_score: 0.91, confidence: 0.94, response_action: 'Device Isolated', latitude: 17.3850, longitude: 78.4867, reasons: 'Communication protocol violation detected. Device sending malformed packets. Possible firmware corruption or injection attack.', processed_at: '2024-01-18T20:00:00Z', asset_type: 'Soil Sensor', action_type: 'Write', resource_type: 'Communication', authorization_status: 'Unauthorized' },
    //         { id: 10, event_id: 'EVT-010', device_id: 10, device_name: 'Weather Station Zeta', farm_id: 5, farm_name: 'Deccan Plateau Farm', prediction: 'Suspicious', anomaly_score: 0.48, confidence: 0.85, response_action: 'Alert Sent', latitude: 17.3855, longitude: 78.4870, reasons: 'Data transmission frequency increased by 300%. Possible data exfiltration attempt or sensor malfunction.', processed_at: '2024-01-18T19:30:00Z', asset_type: 'Weather Station', action_type: 'Read', resource_type: 'Data Transmission', authorization_status: 'Suspicious' },
    //         { id: 11, event_id: 'EVT-011', device_id: 1, device_name: 'Soil Sensor Alpha', farm_id: 1, farm_name: 'Green Valley Farm', prediction: 'Normal', anomaly_score: 0.11, confidence: 0.94, response_action: 'None', latitude: 28.6139, longitude: 77.2090, reasons: 'Routine check passed. All parameters nominal.', processed_at: '2024-01-20T08:00:00Z', asset_type: 'Soil Sensor', action_type: 'Read', resource_type: 'Sensor Data', authorization_status: 'Authorized' },
    //         { id: 12, event_id: 'EVT-012', device_id: 3, device_name: 'Irrigation Controller 01', farm_id: 2, farm_name: 'Sunrise Organic Farm', prediction: 'Normal', anomaly_score: 0.18, confidence: 0.89, response_action: 'None', latitude: 19.0760, longitude: 72.8777, reasons: 'Morning irrigation cycle completed successfully.', processed_at: '2024-01-20T07:30:00Z', asset_type: 'Controller', action_type: 'Write', resource_type: 'Control Command', authorization_status: 'Authorized' },
    //         { id: 13, event_id: 'EVT-013', device_id: 5, device_name: 'Soil Sensor Gamma', farm_id: 3, farm_name: 'Krishna Agro Fields', prediction: 'Suspicious', anomaly_score: 0.55, confidence: 0.81, response_action: 'Alert Sent', latitude: 13.0827, longitude: 80.2707, reasons: 'Minor GPS drift detected. Monitoring for further anomalies.', processed_at: '2024-01-20T06:00:00Z', asset_type: 'Soil Sensor', action_type: 'Read', resource_type: 'Location Data', authorization_status: 'Suspicious' },
    //         { id: 14, event_id: 'EVT-014', device_id: 7, device_name: 'Irrigation Controller 02', farm_id: 4, farm_name: 'Punjab Golden Harvest', prediction: 'Normal', anomaly_score: 0.09, confidence: 0.97, response_action: 'None', latitude: 31.1471, longitude: 75.3412, reasons: 'Evening irrigation cycle completed. Water usage optimal.', processed_at: '2024-01-19T18:30:00Z', asset_type: 'Controller', action_type: 'Write', resource_type: 'Control Command', authorization_status: 'Authorized' },
    //         { id: 15, event_id: 'EVT-015', device_id: 2, device_name: 'Weather Station Beta', farm_id: 1, farm_name: 'Green Valley Farm', prediction: 'Normal', anomaly_score: 0.07, confidence: 0.98, response_action: 'None', latitude: 28.6145, longitude: 77.2095, reasons: 'Daily weather summary generated. All readings consistent.', processed_at: '2024-01-19T23:59:00Z', asset_type: 'Weather Station', action_type: 'Read', resource_type: 'Weather Data', authorization_status: 'Authorized' }
    //     ],
    //     devicesData: [
    //         { date: 'Jan 10', active: 2, inactive: 0 }, { date: 'Jan 11', active: 3, inactive: 0 }, { date: 'Jan 12', active: 4, inactive: 0 },
    //         { date: 'Jan 13', active: 5, inactive: 0 }, { date: 'Jan 14', active: 6, inactive: 1 }, { date: 'Jan 15', active: 6, inactive: 1 },
    //         { date: 'Jan 16', active: 7, inactive: 1 }, { date: 'Jan 17', active: 8, inactive: 1 }, { date: 'Jan 18', active: 7, inactive: 3 },
    //         { date: 'Jan 19', active: 7, inactive: 3 }, { date: 'Jan 20', active: 7, inactive: 3 }
    //     ],
    //     predictionDistribution: { normal: 8, suspicious: 4, anomaly: 3 },
    //     recordsData: [
    //         { date: 'Jan 10', count: 1 }, { date: 'Jan 11', count: 1 }, { date: 'Jan 12', count: 2 },
    //         { date: 'Jan 13', count: 1 }, { date: 'Jan 14', count: 2 }, { date: 'Jan 15', count: 1 },
    //         { date: 'Jan 16', count: 1 }, { date: 'Jan 17', count: 1 }, { date: 'Jan 18', count: 3 },
    //         { date: 'Jan 19', count: 2 }, { date: 'Jan 20', count: 5 }
        // Mock farms data (from /farms/by-user/ API)
        farms: [
            { farm_id: 'FARM_001', owner_user_id: 'FARMER_001', farm_name: 'Patel Green Fields', location_lat: 23.0225, location_long: 72.5714, area_in_acres: 12.5, is_active: true },
            { farm_id: 'FARM_002', owner_user_id: 'FARMER_001', farm_name: 'Sabarmati Agro Farm', location_lat: 23.03, location_long: 72.58, area_in_acres: 8.2, is_active: true },
            { farm_id: 'FARM_003', owner_user_id: 'FARMER_001', farm_name: 'Gujarat Khedut Farms', location_lat: 23.015, location_long: 72.565, area_in_acres: 14.1, is_active: true }
        ],
        // Mock assets/devices data (from /assets/by-user/ API)
        assets: [
            // FARM_002 assets
            { asset_id: 'ASSET_00001', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor G01', asset_os: 'Embedded Linux', baseline_lat: 23.1101, baseline_long: 72.5901, is_active: true },
            { asset_id: 'ASSET_00002', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor G02', asset_os: 'Embedded Linux', baseline_lat: 23.1103, baseline_long: 72.5903, is_active: true },
            { asset_id: 'ASSET_00003', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor G03', asset_os: 'Embedded Linux', baseline_lat: 23.1105, baseline_long: 72.5905, is_active: true },
            { asset_id: 'ASSET_00004', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor G04', asset_os: 'Embedded Linux', baseline_lat: 23.1107, baseline_long: 72.5907, is_active: true },
            { asset_id: 'ASSET_00005', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'irrigation_controller', asset_name: 'Irrigation Controller G01', asset_os: 'RTOS', baseline_lat: 23.1109, baseline_long: 72.5909, is_active: true },
            { asset_id: 'ASSET_00006', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'irrigation_controller', asset_name: 'Irrigation Controller G02', asset_os: 'RTOS', baseline_lat: 23.1111, baseline_long: 72.5911, is_active: true },
            { asset_id: 'ASSET_00007', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'irrigation_controller', asset_name: 'Irrigation Controller G03', asset_os: 'RTOS', baseline_lat: 23.1113, baseline_long: 72.5913, is_active: true },
            { asset_id: 'ASSET_00008', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'gateway', asset_name: 'Farm Gateway G02', asset_os: 'Ubuntu Core', baseline_lat: 23.1117, baseline_long: 72.5917, is_active: true },
            { asset_id: 'ASSET_00009', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'gateway', asset_name: 'Farm Gateway G03', asset_os: 'Ubuntu Core', baseline_lat: 23.1119, baseline_long: 72.5919, is_active: true },
            { asset_id: 'ASSET_00010', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'weather_station', asset_name: 'Weather Station G01', asset_os: 'FreeRTOS', baseline_lat: 23.1121, baseline_long: 72.5921, is_active: true },
            { asset_id: 'ASSET_00011', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'weather_station', asset_name: 'Weather Station G02', asset_os: 'FreeRTOS', baseline_lat: 23.1123, baseline_long: 72.5923, is_active: true },
            { asset_id: 'ASSET_00012', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'weather_station', asset_name: 'Weather Station G03', asset_os: 'FreeRTOS', baseline_lat: 23.1125, baseline_long: 72.5925, is_active: true },
            { asset_id: 'ASSET_00013', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor G05', asset_os: 'Embedded Linux', baseline_lat: 23.1127, baseline_long: 72.5927, is_active: true },
            { asset_id: 'ASSET_00014', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor G06', asset_os: 'Embedded Linux', baseline_lat: 23.1129, baseline_long: 72.5929, is_active: true },
            { asset_id: 'ASSET_00015', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'irrigation_controller', asset_name: 'Irrigation Controller G04', asset_os: 'RTOS', baseline_lat: 23.1131, baseline_long: 72.5931, is_active: true },
            { asset_id: 'ASSET_00016', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'gateway', asset_name: 'Farm Gateway G04', asset_os: 'Ubuntu Core', baseline_lat: 23.1133, baseline_long: 72.5933, is_active: true },
            { asset_id: 'ASSET_00017', farm_id: 'FARM_002', owner_user_id: 'FARMER_001', asset_type: 'weather_station', asset_name: 'Weather Station G04', asset_os: 'FreeRTOS', baseline_lat: 23.1135, baseline_long: 72.5935, is_active: true },
            // FARM_001 assets
            { asset_id: 'ASSET_00018', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor A01', asset_os: 'Embedded Linux', baseline_lat: 23.0201, baseline_long: 72.5501, is_active: true },
            { asset_id: 'ASSET_00019', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor A02', asset_os: 'Embedded Linux', baseline_lat: 23.0203, baseline_long: 72.5503, is_active: true },
            { asset_id: 'ASSET_00020', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor A03', asset_os: 'Embedded Linux', baseline_lat: 23.0205, baseline_long: 72.5505, is_active: true },
            { asset_id: 'ASSET_00021', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor A04', asset_os: 'Embedded Linux', baseline_lat: 23.0207, baseline_long: 72.5507, is_active: true },
            { asset_id: 'ASSET_00022', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'irrigation_controller', asset_name: 'Irrigation Controller A01', asset_os: 'RTOS', baseline_lat: 23.0209, baseline_long: 72.5509, is_active: true },
            { asset_id: 'ASSET_00023', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'irrigation_controller', asset_name: 'Irrigation Controller A02', asset_os: 'RTOS', baseline_lat: 23.0211, baseline_long: 72.5511, is_active: true },
            { asset_id: 'ASSET_00024', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'irrigation_controller', asset_name: 'Irrigation Controller A03', asset_os: 'RTOS', baseline_lat: 23.0213, baseline_long: 72.5513, is_active: true },
            { asset_id: 'ASSET_00025', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'gateway', asset_name: 'Farm Gateway A01', asset_os: 'Ubuntu Core', baseline_lat: 23.0215, baseline_long: 72.5515, is_active: true },
            { asset_id: 'ASSET_00026', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'gateway', asset_name: 'Farm Gateway A02', asset_os: 'Ubuntu Core', baseline_lat: 23.0217, baseline_long: 72.5517, is_active: true },
            { asset_id: 'ASSET_00027', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'gateway', asset_name: 'Farm Gateway A03', asset_os: 'Ubuntu Core', baseline_lat: 23.0219, baseline_long: 72.5519, is_active: true },
            { asset_id: 'ASSET_00028', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'weather_station', asset_name: 'Weather Station A01', asset_os: 'FreeRTOS', baseline_lat: 23.0221, baseline_long: 72.5521, is_active: true },
            { asset_id: 'ASSET_00029', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'weather_station', asset_name: 'Weather Station A02', asset_os: 'FreeRTOS', baseline_lat: 23.0223, baseline_long: 72.5523, is_active: true },
            { asset_id: 'ASSET_00030', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'weather_station', asset_name: 'Weather Station A03', asset_os: 'FreeRTOS', baseline_lat: 23.0225, baseline_long: 72.5525, is_active: true },
            { asset_id: 'ASSET_00031', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor A05', asset_os: 'Embedded Linux', baseline_lat: 23.0227, baseline_long: 72.5527, is_active: true },
            { asset_id: 'ASSET_00032', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'soil_sensor', asset_name: 'Soil Sensor A06', asset_os: 'Embedded Linux', baseline_lat: 23.0229, baseline_long: 72.5529, is_active: true },
            { asset_id: 'ASSET_00033', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'irrigation_controller', asset_name: 'Irrigation Controller A04', asset_os: 'RTOS', baseline_lat: 23.0231, baseline_long: 72.5531, is_active: true },
            { asset_id: 'ASSET_00034', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'gateway', asset_name: 'Farm Gateway A04', asset_os: 'Ubuntu Core', baseline_lat: 23.0233, baseline_long: 72.5533, is_active: true },
            { asset_id: 'ASSET_00035', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'weather_station', asset_name: 'Weather Station A04', asset_os: 'FreeRTOS', baseline_lat: 23.0235, baseline_long: 72.5535, is_active: true },
            { asset_id: 'ASSET_00036', farm_id: 'FARM_001', owner_user_id: 'FARMER_001', asset_type: 'weather_station', asset_name: 'Weather Station A04', asset_os: 'FreeRTOS', baseline_lat: 23.0235, baseline_long: 72.5535, is_active: true }
        ]
    };

    // ============================================
    // MODULE DEFINITION & CONFIG
    // ============================================
    
    angular.module('cropGuardApp', ['ngRoute'])
        
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            
            $routeProvider
                .when('/', {
                    templateUrl: 'landing.html',
                    controller: 'LandingController',
                    controllerAs: 'vm'
                })
                .when('/login', {
                    templateUrl: 'login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                })
                .when('/dashboard', {
                    redirectTo: '/dashboard/home'
                })
                .when('/dashboard/home', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/analytics', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/farms', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/farms/:id', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/devices', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/devices/:id', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/records', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/geographic', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .when('/dashboard/account', {
                    templateUrl: 'dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: ['AuthService', '$location', function(AuthService, $location) {
                            if (!AuthService.isAuthenticated()) {
                                $location.path('/login');
                            }
                        }]
                    }
                })
                .otherwise({
                    redirectTo: '/'
                });

            // Use hash-based URLs so it works without a server
            $locationProvider.hashPrefix('');
        }]);

        // ============================================
// AUTH SERVICE (Simple Local Auth)
// ============================================

angular.module('cropGuardApp')
.factory('AuthService', ['$q', '$window', function ($q, $window) {

    let currentUser = null;
    
    // Check localStorage on initialization to restore session
    var storedUser = $window.localStorage.getItem('cropGuardUser');
    if (storedUser) {
        try {
            currentUser = JSON.parse(storedUser);
        } catch (e) {
            $window.localStorage.removeItem('cropGuardUser');
            currentUser = null;
        }
    }

    return {
        login: function (email, password) {
            // Validate credentials
            if (email === 'nidhipatel2005@gmail.com' && password === 'nidhi12345') {
                currentUser = {
                    id: 'FARMER_001',
                    name: 'Nidhi Patel',
                    email: email,
                    role: 'Farmer',
                    created_at: new Date().toISOString()
                };
                // Save to localStorage
                $window.localStorage.setItem('cropGuardUser', JSON.stringify(currentUser));
                return $q.resolve(currentUser);
            }
            return $q.reject({ message: 'Invalid email or password' });
        },
        

        logout: function () {
            currentUser = null;
            // Clear localStorage
            $window.localStorage.removeItem('cropGuardUser');
        },

        isAuthenticated: function () {
            return !!currentUser;
        },

        getCurrentUser: function () {
            return currentUser;
        }
    };
}]);


    // ============================================
    // DATA SERVICE (Mock Data)
    // ============================================
    
    angular.module('cropGuardApp')
.factory('DataService', ['$http', '$q', function($http, $q) {

    const BASE_URL = 'http://127.0.0.1:8000';
    const USER_ID = 'FARMER_001'; // hardcoded for now (matches your backend)

    function mapFarm(f) {
        return {
            id: f.farm_id,
            name: f.farm_name,
            area: f.area_in_acres,
            latitude: f.location_lat,
            longitude: f.location_long,
            is_active: f.is_active,
            created_at: new Date()
        };
    }

    function mapDevice(a) {
        // Find farm name from farms data
        var farm = MOCK_DATA.farms.find(f => f.farm_id === a.farm_id);
        return {
            id: a.asset_id,
            name: a.asset_name,
            type: normalizeType(a.asset_type),
            farm_id: a.farm_id,
            farm_name: farm ? farm.farm_name : a.farm_id,
            os: a.asset_os,
            is_active: a.is_active,
            baseline_lat: a.baseline_lat,
            baseline_long: a.baseline_long,
            last_seen: new Date(),
            created_at: new Date(),
            owner_user_id: a.owner_user_id
        };
    }

    function normalizeType(type) {
        switch (type) {
            case 'soil_sensor': return 'Soil Sensor';
            case 'weather_station': return 'Weather Station';
            case 'irrigation_controller': return 'Controller';
            case 'gateway': return 'Gateway';
            default: return type;
        }
    }

    return {

        // ================= FARMS =================
        getFarms: function () {
            if (USE_MOCK_DATA) {
                // Use mock data
                return $q.resolve(MOCK_DATA.farms.map(mapFarm));
            } else {
                // Use real API
                return $http.post(`${BASE_URL}/farms/by-user/`, {
                    user_id: USER_ID
                }).then(res => res.data.farms.map(mapFarm));
            }
        },

        getFarm: function (id) {
            return this.getFarms().then(farms =>
                farms.find(f => f.id == id)
            );
        },

        // ================= DEVICES =================
        getDevices: function () {
            if (USE_MOCK_DATA) {
                // Use mock data
                return $q.resolve(MOCK_DATA.assets.map(mapDevice));
            } else {
                // Use real API
                return $http.post(`${BASE_URL}/assets/by-user/`, {
                    user_id: USER_ID
                }).then(res => res.data.assets.map(mapDevice));
            }
        },

        getDevice: function (id) {
            return this.getDevices().then(devices =>
                devices.find(d => d.id == id)
            );
        },

        getDevicesByFarm: function (farmId) {
            if (USE_MOCK_DATA) {
                // Use mock data - filter by farm_id
                return $q.resolve(MOCK_DATA.assets
                    .filter(a => a.farm_id === farmId)
                    .map(mapDevice));
            } else {
                // Use real API
                return $http.post(`${BASE_URL}/assets/by-user-farm/`, {
                    user_id: USER_ID,
                    farm_id: farmId
                }).then(res => res.data.assets.map(mapDevice));
            }
        },

        // ================= RECORDS =================
        getRecords: function () {
            return $q.resolve([]);
        },

        // ================= ANALYTICS HELPERS =================
        getDevicesData: function() {
            if (USE_MOCK_DATA) {
                // Mock data for devices over time chart
                var mockDevicesData = [
                    { date: 'Jan 10', active: 2, inactive: 0 },
                    { date: 'Jan 11', active: 3, inactive: 0 },
                    { date: 'Jan 12', active: 4, inactive: 0 },
                    { date: 'Jan 13', active: 5, inactive: 0 },
                    { date: 'Jan 14', active: 6, inactive: 1 },
                    { date: 'Jan 15', active: 6, inactive: 1 },
                    { date: 'Jan 16', active: 7, inactive: 1 },
                    { date: 'Jan 17', active: 8, inactive: 1 },
                    { date: 'Jan 18', active: 7, inactive: 3 },
                    { date: 'Jan 19', active: 7, inactive: 3 },
                    { date: 'Jan 20', active: 36, inactive: 0 }
                ];
                return $q.resolve(mockDevicesData);
            }
            return $q.resolve([]);
        },
        getPredictionDistribution: function() {
            if (USE_MOCK_DATA) {
                // Mock data for prediction distribution
                return $q.resolve({ normal: 30, suspicious: 4, anomaly: 2 });
            }
            return $q.resolve({ normal: 0, suspicious: 0, anomaly: 0 });
        },
        getRecordsData: () => $q.resolve([]),
        getRecordsTimelineData: function() {
            if (USE_MOCK_DATA) {
                // Mock data for records anomaly score chart
                var mockRecordsData = [
                    { event: 'EVT-001', score: 0.12, prediction: 'Normal' },
                    { event: 'EVT-002', score: 0.08, prediction: 'Normal' },
                    { event: 'EVT-003', score: 0.45, prediction: 'Suspicious' },
                    { event: 'EVT-004', score: 0.15, prediction: 'Normal' },
                    { event: 'EVT-005', score: 0.78, prediction: 'Anomaly' },
                    { event: 'EVT-006', score: 0.85, prediction: 'Anomaly' },
                    { event: 'EVT-007', score: 0.10, prediction: 'Normal' },
                    { event: 'EVT-008', score: 0.52, prediction: 'Suspicious' },
                    { event: 'EVT-009', score: 0.91, prediction: 'Anomaly' },
                    { event: 'EVT-010', score: 0.48, prediction: 'Suspicious' }
                ];
                return $q.resolve(mockRecordsData);
            }
            return $q.resolve([]);
        },
        getRecordsByDeviceType: () => $q.resolve({}),
        getResponseActionsData: () => $q.resolve({}),
        getAnomalyScoreByFarm: () => $q.resolve([]),

        // ================= MAP =================
        getMapEvents: function () {
            return this.getDevices().then(devices =>
                devices.map(d => ({
                    id: d.id,
                    latitude: d.baseline_lat,
                    longitude: d.baseline_long,
                    prediction: d.is_active ? 'Normal' : 'Anomaly',
                    farm_name: d.farm_name
                }))
            );
        }
    };
}]);

    // ============================================
    // MAIN CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('MainController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
            $scope.showLogoutModal = false;
            $scope.selectedEvent = null;

            $scope.confirmLogout = function() {
                AuthService.logout();
                $scope.showLogoutModal = false;
                $location.path('/');
            };

            $scope.$on('requestLogout', function() { $scope.showLogoutModal = true; });
            $scope.$on('openEventModal', function(e, event) { $scope.selectedEvent = event; });
        }]);

    // ============================================
    // LANDING CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('LandingController', ['$location', 'AuthService', function($location, AuthService) {
            var vm = this;
            if (AuthService.isAuthenticated()) { $location.path('/dashboard/home'); return; }
            vm.goToLogin = function() { $location.path('/login'); };
        }]);

    // ============================================
    // LOGIN CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('LoginController', ['$location', 'AuthService', '$http', function($location, AuthService, $http) {
            var vm = this;
            if (AuthService.isAuthenticated()) { $location.path('/dashboard/home'); return; }

            vm.email = '';
            vm.password = '';
            vm.error = '';
            vm.isLoading = false;

            // Helper function to get device type
            function getDeviceType() {
                var ua = navigator.userAgent;
                if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
                    return "Tablet";
                }
                if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
                    return "Mobile";
                }
                return "Desktop";
            }

            // Helper function to get device OS
            function getDeviceOS() {
                var userAgent = navigator.userAgent;
                var platform = navigator.platform;
                var os = 'Unknown';
                
                if (/Win/i.test(platform)) {
                    os = 'Windows';
                } else if (/Mac/i.test(platform)) {
                    os = 'MacOS';
                } else if (/Linux/i.test(platform)) {
                    os = 'Linux';
                } else if (/Android/i.test(userAgent)) {
                    os = 'Android';
                } else if (/iOS|iPhone|iPad|iPod/.test(userAgent)) {
                    os = 'iOS';
                }
                
                return os;
            }

            // Helper function to get IP address
            function getIPAddress() {
                return fetch('https://api.ipify.org?format=json')
                    .then(function(response) { return response.json(); })
                    .then(function(data) { return data.ip; })
                    .catch(function(error) {
                        console.error('Error getting IP:', error);
                        return 'unavailable';
                    });
            }

            // Helper function to get geolocation
            function getGeolocation() {
                return new Promise(function(resolve, reject) {
                    if (!navigator.geolocation) {
                        resolve({ latitude: null, longitude: null });
                        return;
                    }
                    
                    navigator.geolocation.getCurrentPosition(
                        function(position) {
                            resolve({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude
                            });
                        },
                        function(error) {
                            // Silently handle geolocation errors (user may have denied permission)
                            // Error codes: 1=PERMISSION_DENIED, 2=POSITION_UNAVAILABLE, 3=TIMEOUT
                            if (error.code !== 1) { // Only log if not permission denied (expected)
                                console.warn('Geolocation unavailable:', error.message || 'Location services unavailable');
                            }
                            resolve({ latitude: null, longitude: null });
                        },
                        {
                            enableHighAccuracy: false, // Less strict for better compatibility
                            timeout: 3000, // Shorter timeout
                            maximumAge: 60000 // Accept cached location up to 1 minute old
                        }
                    );
                });
            }

            vm.login = function() {
                vm.error = '';
                if (!vm.email || !vm.password) { vm.error = 'Please enter both email and password'; return; }
                vm.isLoading = true;

                // Collect all required data for API payload
                var deviceType = getDeviceType();
                var deviceOS = getDeviceOS();
                var timestamp = new Date().toISOString();
                
                // Get IP address and geolocation asynchronously
                Promise.all([getIPAddress(), getGeolocation()])
                    .then(function(results) {
                        var ipAddress = results[0];
                        var geoLocation = results[1];
                        
                        // Create payload (for testing - no API call)
                        var payload = {
                            userID: vm.email,
                            password: vm.password,
                            timestamp: timestamp,
                            ipAddress: ipAddress,
                            longitude: geoLocation.longitude,
                            latitude: geoLocation.latitude,
                            deviceOS: deviceOS,
                            deviceType: deviceType
                        };
                        
                        // Log payload to console
                        console.log('Login Payload:', payload);
                        
                        // Continue with authentication (API call removed for now)
                        AuthService.login(vm.email, vm.password)
                            .then(function() { 
                                $location.path('/dashboard/home'); 
                            })
                            .catch(function(error) { 
                                vm.error = error.message || 'Invalid credentials'; 
                            })
                            .finally(function() { 
                                vm.isLoading = false; 
                            });
                    })
                    .catch(function(error) {
                        console.error('Error collecting login data:', error);
                        // If data collection fails, still try to authenticate
                        AuthService.login(vm.email, vm.password)
                            .then(function() { $location.path('/dashboard/home'); })
                            .catch(function(err) { vm.error = err.message || 'Invalid credentials'; })
                            .finally(function() { vm.isLoading = false; });
                    });
            };

            vm.goBack = function() { $location.path('/'); };
        }]);

    // ============================================
    // DASHBOARD CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('DashboardController', ['$scope', '$location', '$routeParams', 'AuthService', 'DataService', function($scope, $location, $routeParams, AuthService, DataService) {
            var vm = this;

            vm.user = AuthService.getCurrentUser();
            vm.sidebarCollapsed = false;
            vm.rightSidebarOpen = false;
            vm.dropdownOpen = false;
            vm.currentPage = getCurrentPage();
            vm.pageTitle = getPageTitle();
            vm.routeParams = $routeParams;
            vm.mapEvents = [];

            vm.navItems = [
                { id: 'home', label: 'Home', icon: 'fa-home', route: '/dashboard/home' },
                { id: 'analytics', label: 'Analytics', icon: 'fa-chart-line', route: '/dashboard/analytics' },
                { id: 'geographic', label: 'Geographic', icon: 'fa-map-marked-alt', route: '/dashboard/geographic' },
                { id: 'farms', label: 'Farms', icon: 'fa-seedling', route: '/dashboard/farms' },
                { id: 'devices', label: 'Devices', icon: 'fa-microchip', route: '/dashboard/devices' },
                { id: 'records', label: 'Records', icon: 'fa-clipboard-list', route: '/dashboard/records' }
            ];

            vm.toggleSidebar = function() { vm.sidebarCollapsed = !vm.sidebarCollapsed; };
            vm.toggleDropdown = function(event) { if (event) event.stopPropagation(); vm.dropdownOpen = !vm.dropdownOpen; };
            vm.navigateTo = function(route) { $location.path(route); };
            vm.isActive = function(page) {
                if (page === 'farms') return vm.currentPage === 'farms' || vm.currentPage === 'farm-detail';
                if (page === 'devices') return vm.currentPage === 'devices' || vm.currentPage === 'device-detail';
                return vm.currentPage === page;
            };
            vm.requestLogout = function() { vm.dropdownOpen = false; $scope.$emit('requestLogout'); };
            vm.goToAccount = function() { vm.dropdownOpen = false; $location.path('/dashboard/account'); };
            vm.openRightSidebar = function() { vm.rightSidebarOpen = true; };
            vm.closeRightSidebar = function() { vm.rightSidebarOpen = false; };
            vm.openEventModal = function(event) { $scope.$emit('openEventModal', event); };

            // Load devices for map preview
            DataService.getDevices().then(function(devices) {
                vm.mapDevices = devices;
            });
            DataService.getMapEvents().then(function(events) { vm.mapEvents = events; });
            $scope.$on('openMapSidebar', function() { vm.rightSidebarOpen = true; });

            angular.element(document).on('click', function(e) {
                var target = e.target;
                var isInsideDropdown = false;
                while (target && target !== document) {
                    if (target.classList && target.classList.contains('user-dropdown')) { isInsideDropdown = true; break; }
                    target = target.parentElement;
                }
                if (!isInsideDropdown && vm.dropdownOpen) { $scope.$apply(function() { vm.dropdownOpen = false; }); }
            });

            function getCurrentPage() {
                var path = $location.path();
                if (path.indexOf('/dashboard/home') === 0) return 'home';
                if (path.indexOf('/dashboard/farms') === 0) return $routeParams.id ? 'farm-detail' : 'farms';
                if (path.indexOf('/dashboard/devices') === 0) return $routeParams.id ? 'device-detail' : 'devices';
                if (path.indexOf('/dashboard/records') === 0) return 'records';
                if (path.indexOf('/dashboard/geographic') === 0) return 'geographic';
                if (path.indexOf('/dashboard/account') === 0) return 'account';
                if (path.indexOf('/dashboard/analytics') === 0) return 'analytics';
                return 'home';
            }

            function getPageTitle() {
                var titles = { 'home': 'Dashboard Home', 'farms': 'Farms', 'farm-detail': 'Farm Details', 'devices': 'Devices', 'device-detail': 'Device Details', 'records': 'ML Records', 'analytics': 'Analytics Dashboard', 'geographic': 'Geographic Threat Map', 'account': 'Account Details' };
                return titles[vm.currentPage] || 'Dashboard';
            }
        }]);

    // ============================================
    // ANALYTICS CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('AnalyticsController', ['$scope', '$timeout', '$location', 'DataService', function($scope, $timeout, $location, DataService) {
            var vm = this;

            vm.farms = [];
            vm.selectedFarmId = '';
            vm.isLoading = true;
            vm.mapEvents = [];
            vm.stats = { totalFarms: 0, totalDevices: 0, anomalyCount: 0, avgConfidence: 0 };
            vm.deviceStatus = { normal: 0, suspicious: 0, anomalies: 0 };
            vm.topLocations = [];
            vm.devicesChart = null;
            vm.predictionChart = null;
            vm.recordsChart = null;

            vm.onFarmChange = function() { loadData(); };
            vm.goToFarms = function() { $location.path('/dashboard/farms'); };
            vm.goToDevices = function() { $location.path('/dashboard/devices'); };
            vm.goToRecords = function() { $location.path('/dashboard/records'); };
            vm.goToGeographic = function() { $location.path('/dashboard/geographic'); };
            vm.openMapSidebar = function() { $scope.$emit('openMapSidebar'); };
            vm.openEventModal = function(event) { $scope.$emit('openEventModal', event); };

            DataService.getFarms().then(function(data) { vm.farms = data; vm.stats.totalFarms = data.length; });
            loadData();

            function loadData() {
                vm.isLoading = true;
                
                Promise.all([
                    DataService.getDevicesData(),
                    DataService.getPredictionDistribution(),
                    DataService.getRecordsTimelineData(),
                    DataService.getDevices(),
                    DataService.getRecords(),
                    DataService.getMapEvents()
                ])
                .then(function(results) {
                    var devicesData = results[0];
                    var predictionData = results[1];
                    var recordsTimelineData = results[2];
                    var devices = results[3];
                    var records = results[4];
                    vm.mapEvents = results[5];
                    
                    // Convert devices to map format for preview
                    vm.mapDevices = devices;

                    vm.stats.totalDevices = devices.length;
                    vm.stats.anomalyCount = predictionData.anomaly || 0;
                    
                    var totalConfidence = 0;
                    records.forEach(function(r) { totalConfidence += r.confidence; });
                    vm.stats.avgConfidence = records.length > 0 ? Math.round((totalConfidence / records.length) * 100) : 0;

                    // Calculate device status counts from records
                    // Initialize all devices as normal
                    var deviceStatusMap = {};
                    devices.forEach(function(device) {
                        deviceStatusMap[device.id] = 'Normal';
                    });

                    // Update status based on records (keep most severe status)
                    records.forEach(function(record) {
                        if (deviceStatusMap[record.device_id]) {
                            var current = deviceStatusMap[record.device_id];
                            // Keep the most severe status (Anomaly > Suspicious > Normal)
                            if (record.prediction === 'Anomaly' || 
                                (record.prediction === 'Suspicious' && current !== 'Anomaly')) {
                                deviceStatusMap[record.device_id] = record.prediction;
                            }
                        }
                    });

                    vm.deviceStatus.normal = 0;
                    vm.deviceStatus.suspicious = 0;
                    vm.deviceStatus.anomalies = 0;
                    Object.values(deviceStatusMap).forEach(function(status) {
                        if (status === 'Normal') vm.deviceStatus.normal++;
                        else if (status === 'Suspicious') vm.deviceStatus.suspicious++;
                        else if (status === 'Anomaly') vm.deviceStatus.anomalies++;
                    });

                    // Calculate top locations with device counts
                    var locationMap = {};
                    devices.forEach(function(device) {
                        if (!locationMap[device.farm_name]) {
                            locationMap[device.farm_name] = { name: device.farm_name, count: 0 };
                        }
                        locationMap[device.farm_name].count++;
                    });
                    vm.topLocations = Object.values(locationMap)
                        .sort(function(a, b) { return b.count - a.count; })
                        .slice(0, 5);

                    $timeout(function() {
                        renderDevicesChart(devicesData);
                        renderPredictionChart(predictionData);
                        renderRecordsChart(recordsTimelineData);
                    }, 100);
                })
                .finally(function() { $scope.$apply(function() { vm.isLoading = false; }); });
            }

            function renderDevicesChart(data) {
                var ctx = document.getElementById('devicesChart');
                if (!ctx) return;
                if (vm.devicesChart) vm.devicesChart.destroy();

                vm.devicesChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: data.map(function(d) { return d.date; }),
                        datasets: [
                            { label: 'Active Devices', data: data.map(function(d) { return d.active; }), backgroundColor: '#2e7d32', borderColor: '#2e7d32', borderWidth: 1 },
                            { label: 'Inactive Devices', data: data.map(function(d) { return d.inactive; }), backgroundColor: '#d32f2f', borderColor: '#d32f2f', borderWidth: 1 }
                        ]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: false,
                        plugins: { legend: { position: 'bottom', labels: { color: '#5a5a5a', padding: 15, usePointStyle: true, pointStyle: 'rect' } } },
                        scales: {
                            x: { stacked: true, grid: { color: 'rgba(0, 0, 0, 0.08)' }, ticks: { color: '#5a5a5a', maxRotation: 45, maxTicksLimit: 10 } },
                            y: { stacked: true, beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.08)' }, ticks: { color: '#5a5a5a', stepSize: 2 } }
                        }
                    }
                });
            }

            function renderPredictionChart(data) {
                var ctx = document.getElementById('predictionChart');
                if (!ctx) return;
                if (vm.predictionChart) vm.predictionChart.destroy();

                vm.predictionChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Normal', 'Suspicious', 'Anomaly'],
                        datasets: [{ data: [data.normal, data.suspicious, data.anomaly], backgroundColor: ['#2e7d32', '#ed6c02', '#d32f2f'], borderWidth: 0, hoverOffset: 10 }]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: false, cutout: '65%',
                        plugins: { legend: { position: 'bottom', labels: { color: '#5a5a5a', padding: 20, usePointStyle: true, pointStyle: 'circle' } } }
                    }
                });
            }

            function renderRecordsChart(data) {
                var ctx = document.getElementById('recordsChart');
                if (!ctx) return;
                if (vm.recordsChart) vm.recordsChart.destroy();

                // Color-code bars by prediction type
                var barColors = data.map(function(d) {
                    switch (d.prediction) {
                        case 'Normal': return '#2e7d32';
                        case 'Suspicious': return '#ed6c02';
                        case 'Anomaly': return '#d32f2f';
                        default: return '#1976d2';
                    }
                });

                vm.recordsChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: data.map(function(d) { return d.event; }),
                        datasets: [{ 
                            label: 'Anomaly Score', 
                            data: data.map(function(d) { return d.score; }), 
                            backgroundColor: barColors,
                            borderColor: barColors,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: false,
                        plugins: { 
                            legend: { display: false },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        var d = data[context.dataIndex];
                                        return d.prediction + ': ' + d.score.toFixed(2);
                                    }
                                }
                            }
                        },
                        scales: {
                            x: { grid: { color: 'rgba(0, 0, 0, 0.08)' }, ticks: { color: '#5a5a5a', maxRotation: 45, font: { size: 10 } } },
                            y: { min: 0, max: 1, grid: { color: 'rgba(0, 0, 0, 0.08)' }, ticks: { color: '#5a5a5a' } }
                        }
                    }
                });
            }


            $scope.$on('$destroy', function() {
                if (vm.devicesChart) vm.devicesChart.destroy();
                if (vm.predictionChart) vm.predictionChart.destroy();
                if (vm.recordsChart) vm.recordsChart.destroy();
            });
        }]);

    // ============================================
    // HOME CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('HomeController', ['$scope', '$location', 'AuthService', 'DataService', function($scope, $location, AuthService, DataService) {
            var vm = this;

            vm.user = AuthService.getCurrentUser();
            vm.stats = { totalFarms: 0, totalDevices: 0, activeDevices: 0, recentAlerts: 0, systemHealth: 0 };
            vm.mapDevices = [];
            vm.mapEvents = [];
            vm.recentAlerts = [];
            vm.recentActivity = [];

            // Navigation functions
            vm.goToFarms = function() { $location.path('/dashboard/farms'); };
            vm.goToDevices = function() { $location.path('/dashboard/devices'); };
            vm.goToRecords = function() { $location.path('/dashboard/records'); };
            vm.goToGeographic = function() { $location.path('/dashboard/geographic'); };
            vm.goToAnalytics = function() { $location.path('/dashboard/analytics'); };
            vm.openEventModal = function(event) { $scope.$emit('openEventModal', event); };
            vm.viewRecord = function(record) { $location.path('/dashboard/records'); };

            // Load data
            function loadData() {
                Promise.all([
                    DataService.getFarms(),
                    DataService.getDevices(),
                    DataService.getRecords(),
                    DataService.getMapEvents()
                ])
                .then(function(results) {
                    var farms = results[0];
                    var devices = results[1];
                    var records = results[2];
                    var mapEvents = results[3];

                    // Calculate stats
                    vm.stats.totalFarms = farms.length;
                    vm.stats.totalDevices = devices.length;
                    vm.stats.activeDevices = devices.filter(function(d) { return d.is_active; }).length;
                    
                    // Get recent alerts (anomalies and suspicious) - sorted by most recent
                    vm.recentAlerts = records
                        .filter(function(r) { return r.prediction === 'Anomaly' || r.prediction === 'Suspicious'; })
                        .sort(function(a, b) { return new Date(b.processed_at) - new Date(a.processed_at); })
                        .slice(0, 10);
                    
                    vm.stats.recentAlerts = vm.recentAlerts.length;
                    
                    // Calculate system health (percentage of active devices)
                    vm.stats.systemHealth = devices.length > 0 ? Math.round((vm.stats.activeDevices / devices.length) * 100) : 100;
                    
                    // Convert devices to map format
                    vm.mapDevices = devices;
                    vm.mapEvents = mapEvents;
                    
                    // Generate device locations summary
                    vm.deviceLocations = [];
                    var locationMap = {};
                    devices.forEach(function(device) {
                        var key = device.farm_name;
                        if (!locationMap[key]) {
                            locationMap[key] = {
                                farm: device.farm_name,
                                total: 0,
                                active: 0,
                                coordinates: device.baseline_lat && device.baseline_long ? 
                                    device.baseline_lat.toFixed(2) + '°, ' + device.baseline_long.toFixed(2) + '°' : 'N/A'
                            };
                        }
                        locationMap[key].total++;
                        if (device.is_active) locationMap[key].active++;
                    });
                    vm.deviceLocations = Object.values(locationMap).slice(0, 5);
                    
                    // Generate recent activity from records - more detailed
                    vm.recentActivity = records
                        .sort(function(a, b) { return new Date(b.processed_at) - new Date(a.processed_at); })
                        .slice(0, 10)
                        .map(function(record) {
                            var activityText = '';
                            if (record.prediction === 'Anomaly') {
                                activityText = 'Anomaly detected on ' + record.device_name + ' at ' + record.farm_name;
                            } else if (record.prediction === 'Suspicious') {
                                activityText = 'Suspicious activity on ' + record.device_name + ' at ' + record.farm_name;
                            } else {
                                activityText = 'Normal operation: ' + record.device_name + ' at ' + record.farm_name;
                            }
                            
                            return {
                                type: record.prediction.toLowerCase(),
                                icon: record.prediction === 'Anomaly' ? 'fa-exclamation-circle' : 
                                      record.prediction === 'Suspicious' ? 'fa-exclamation-triangle' : 'fa-check-circle',
                                text: activityText,
                                time: record.processed_at
                            };
                        });
                    
                    // Apply changes to view
                    $scope.$apply();
                })
                .catch(function(error) {
                    console.error('Error loading home data:', error);
                });
            }

            loadData();
        }]);

    // ============================================
    // FARMS CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('FarmsController', ['$scope', '$location', '$routeParams', 'DataService', function($scope, $location, $routeParams, DataService) {
            var vm = this;

            vm.farms = [];
            vm.selectedFarm = null;
            vm.farmDevices = [];
            vm.isLoading = true;
            vm.viewMode = 'table';
            vm.sortField = 'name';
            vm.sortReverse = false;
            vm.isDetailView = !!$routeParams.id;
            vm.farmId = $routeParams.id;

            vm.setViewMode = function(mode) { vm.viewMode = mode; };
            vm.sortBy = function(field) { if (vm.sortField === field) { vm.sortReverse = !vm.sortReverse; } else { vm.sortField = field; vm.sortReverse = false; } };
            vm.viewFarm = function(farm) { $location.path('/dashboard/farms/' + farm.id); };
            vm.viewDevice = function(device) { $location.path('/dashboard/devices/' + device.id); };
            vm.goBack = function() { $location.path('/dashboard/farms'); };

            if (vm.isDetailView) {
                DataService.getFarm(parseInt(vm.farmId))
                    .then(function(farm) { vm.selectedFarm = farm; return DataService.getDevicesByFarm(parseInt(vm.farmId)); })
                    .then(function(devices) { vm.farmDevices = devices; })
                    .finally(function() { vm.isLoading = false; });
            } else {
                DataService.getFarms().then(function(data) { vm.farms = data; }).finally(function() { vm.isLoading = false; });
            }
        }]);

    // ============================================
    // DEVICES CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('DevicesController', ['$scope', '$location', '$routeParams', 'DataService', function($scope, $location, $routeParams, DataService) {
            var vm = this;

            vm.devices = [];
            vm.selectedDevice = null;
            vm.isLoading = true;
            vm.viewMode = 'table';
            vm.sortField = 'name';
            vm.sortReverse = false;
            vm.filterType = '';
            vm.filterStatus = '';
            vm.deviceTypes = ['Soil Sensor', 'Weather Station', 'Controller', 'Gateway'];
            vm.isDetailView = !!$routeParams.id;
            vm.deviceId = $routeParams.id;

            vm.setViewMode = function(mode) { vm.viewMode = mode; };
            vm.sortBy = function(field) { if (vm.sortField === field) { vm.sortReverse = !vm.sortReverse; } else { vm.sortField = field; vm.sortReverse = false; } };
            vm.viewDevice = function(device) { $location.path('/dashboard/devices/' + device.id); };
            vm.goBack = function() { $location.path('/dashboard/devices'); };
            vm.filteredDevices = function() {
                var result = vm.devices;
                if (vm.filterType) { result = result.filter(function(d) { return d.type === vm.filterType; }); }
                if (vm.filterStatus) { var isActive = vm.filterStatus === 'active'; result = result.filter(function(d) { return d.is_active === isActive; }); }
                return result;
            };

            if (vm.isDetailView) {
                DataService.getDevice(parseInt(vm.deviceId)).then(function(device) { vm.selectedDevice = device; }).finally(function() { vm.isLoading = false; });
            } else {
                DataService.getDevices().then(function(data) { vm.devices = data; }).finally(function() { vm.isLoading = false; });
            }
        }]);

    // ============================================
    // RECORDS CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('RecordsController', ['$scope', 'DataService', function($scope, DataService) {
            var vm = this;

            vm.records = [];
            vm.isLoading = true;
            vm.expandedRow = null;
            vm.filterPrediction = '';
            vm.filterMinScore = '';
            vm.filterMaxScore = '';

            vm.toggleRow = function(recordId) { vm.expandedRow = vm.expandedRow === recordId ? null : recordId; };
            vm.clearFilters = function() { vm.filterPrediction = ''; vm.filterMinScore = ''; vm.filterMaxScore = ''; };
            vm.getPredictionClass = function(prediction) {
                switch (prediction) { case 'Normal': return 'badge-normal'; case 'Suspicious': return 'badge-suspicious'; case 'Anomaly': return 'badge-anomaly'; default: return ''; }
            };
            vm.filteredRecords = function() {
                var result = vm.records;
                if (vm.filterPrediction) { result = result.filter(function(r) { return r.prediction === vm.filterPrediction; }); }
                if (vm.filterMinScore !== '' && vm.filterMinScore !== null) { var minScore = parseFloat(vm.filterMinScore); result = result.filter(function(r) { return r.anomaly_score >= minScore; }); }
                if (vm.filterMaxScore !== '' && vm.filterMaxScore !== null) { var maxScore = parseFloat(vm.filterMaxScore); result = result.filter(function(r) { return r.anomaly_score <= maxScore; }); }
                return result;
            };

            DataService.getRecords().then(function(data) { vm.records = data; }).finally(function() { vm.isLoading = false; });
        }]);

    // ============================================
    // ACCOUNT CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('AccountController', ['$scope', 'AuthService', function($scope, AuthService) {
            var vm = this;
            vm.user = AuthService.getCurrentUser();
            vm.getInitials = function() {
                if (!vm.user || !vm.user.name) return '?';
                var names = vm.user.name.split(' ');
                return names.length >= 2 ? names[0].charAt(0) + names[1].charAt(0) : names[0].charAt(0);
            };
        }]);

    // ============================================
    // GEOGRAPHIC CONTROLLER
    // ============================================
    
    angular.module('cropGuardApp')
        .controller('GeographicController', ['$scope', '$location', 'DataService', function($scope, $location, DataService) {
            var vm = this;

            vm.devices = [];
            vm.isLoading = true;
            vm.stats = { normal: 0, suspicious: 0, anomaly: 0 };

            vm.openDeviceModal = function(device) {
                // Navigate to device detail page
                $location.path('/dashboard/devices/' + device.id);
            };

            // Refresh locations
            vm.refreshLocations = function() {
                vm.isLoading = true;
                loadDevices();
            };

            // Clear all markers
            vm.clearAllMarkers = function() {
                $scope.$broadcast('clearMapMarkers');
            };

            vm.onClearMarkers = function() {
                // Called when markers are cleared from the map directive
            };

            vm.onRefresh = function() {
                vm.refreshLocations();
            };

            // Get device status based on latest record
            vm.getDeviceStatus = function(device) {
                // For now, use is_active to determine status
                // In a real app, you'd check the latest ML record for this device
                if (!device.is_active) return 'Anomaly';
                // You could enhance this by checking recent records
                return 'Normal';
            };

            // Load devices for map
            function loadDevices() {
                DataService.getDevices().then(function(devices) {
                    vm.devices = devices;
                    
                    // Reset stats
                    vm.stats = { normal: 0, suspicious: 0, anomaly: 0 };
                    
                    // Calculate stats based on device status
                    devices.forEach(function(device) {
                        var status = vm.getDeviceStatus(device);
                        if (status === 'Normal') vm.stats.normal++;
                        else if (status === 'Suspicious') vm.stats.suspicious++;
                        else if (status === 'Anomaly') vm.stats.anomaly++;
                    });
                }).finally(function() { vm.isLoading = false; });
            }

            // Initial load
            loadDevices();
        }]);

    // ============================================
    // INDIA MAP DIRECTIVE (SVG-based - for analytics preview)
    // ============================================
    
    angular.module('cropGuardApp')
        .directive('indiaMap', ['$timeout', function($timeout) {
            // Accurate India SVG based on actual geographic shape
            var indiaSvg = '<svg class="india-map-svg" viewBox="0 0 520 600" preserveAspectRatio="xMidYMid meet">' +
                '<defs>' +
                '<linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">' +
                '<stop offset="0%" style="stop-color:#4a7c59;stop-opacity:1" />' +
                '<stop offset="100%" style="stop-color:#2d5237;stop-opacity:1" />' +
                '</linearGradient>' +
                '<filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">' +
                '<feDropShadow dx="2" dy="2" stdDeviation="4" flood-opacity="0.3"/>' +
                '</filter>' +
                '</defs>' +
                '<g class="india-country" filter="url(#mapShadow)">' +
                '<path class="india-main" fill="url(#mapGradient)" stroke="#c9a227" stroke-width="2" d="' +
                'M95,55 L88,48 L82,52 L78,45 L85,38 L95,35 L108,32 L118,38 L125,32 L135,28 ' +
                'L148,25 L158,28 L168,22 L180,25 L192,20 L205,25 L215,22 L225,28 ' +
                'L238,25 L248,30 L258,28 L268,32 L275,28 ' +
                'L285,32 L298,30 L312,35 L328,32 L342,38 L358,35 L372,40 L385,38 ' +
                'L395,42 L402,38 L412,42 L420,40 ' +
                'L432,38 L445,42 L458,48 L468,55 L475,65 L480,78 L478,92 ' +
                'L482,105 L478,118 L475,130 ' +
                'L480,142 L475,155 L470,168 ' +
                'L465,180 L458,192 L448,202 L438,210 ' +
                'L425,205 L412,200 L398,198 L385,205 L378,218 L382,232 ' +
                'L385,248 L380,265 L372,282 L362,298 ' +
                'L348,315 L332,330 L315,342 L298,352 ' +
                'L282,365 L268,380 L258,398 L252,418 ' +
                'L250,438 L252,458 L255,475 L252,490 ' +
                'L245,502 L235,512 L222,518 L208,515 L198,508 L192,498 ' +
                'L185,482 L178,462 L172,442 L168,422 L165,402 ' +
                'L162,382 L158,362 L152,342 L145,322 ' +
                'L140,305 L138,288 ' +
                'L135,272 L130,255 L122,238 L115,222 L108,205 ' +
                'L100,188 L92,172 L85,158 ' +
                'L75,152 L65,155 L55,162 L48,172 L45,185 L52,198 L65,205 L78,202 L88,192 L92,178 ' +
                'L85,168 L72,172 L58,178 L48,188 ' +
                'L35,182 L25,175 L18,162 L15,148 L18,135 L28,125 L42,118 L58,115 ' +
                'L72,112 L82,105 L88,95 L92,82 L95,68 L95,55 Z"/>' +
                '<g class="state-borders" stroke="#c9a227" stroke-width="0.8" fill="none" opacity="0.4">' +
                '<path d="M168,22 C180,45 195,55 215,62 L235,72"/>' +
                '<path d="M215,62 L228,88 L242,108"/>' +
                '<path d="M92,95 Q130,115 155,165 Q145,218 130,272"/>' +
                '<path d="M242,108 L295,115 L355,125 L395,140"/>' +
                '<path d="M130,272 L185,255 L255,252 L325,268 L372,292"/>' +
                '</g>' +
                '<g class="andaman">' +
                '<ellipse cx="468" cy="362" rx="5" ry="15" fill="#3d6b47" stroke="#c9a227" stroke-width="0.8"/>' +
                '<ellipse cx="472" cy="395" rx="4" ry="12" fill="#3d6b47" stroke="#c9a227" stroke-width="0.8"/>' +
                '</g>' +
                '</g>' +
                '</svg>';

            return {
                restrict: 'E',
                scope: { events: '=', devices: '=', onEventClick: '&', onDeviceClick: '&', fullView: '=' },
                template: '<div class="india-map-wrapper" ng-class="{\'full-view\': fullView}">' +
                    '<div class="india-map-container" id="india-map-container">' +
                        indiaSvg +
                        '<div class="map-markers" ng-if="mapData && mapData.length">' +
                            '<div ng-repeat="item in mapData" class="map-marker" ng-class="getMarkerClass(item)" ng-style="getMarkerPosition(item)" ng-click="handleClick(item)" title="{{item.farm_name || item.name}}"></div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="map-legend">' +
                        '<div class="legend-item"><span class="legend-dot normal"></span><span class="legend-text">Normal</span></div>' +
                        '<div class="legend-item"><span class="legend-dot suspicious"></span><span class="legend-text">Suspicious</span></div>' +
                        '<div class="legend-item"><span class="legend-dot anomaly"></span><span class="legend-text">Anomaly</span></div>' +
                    '</div>' +
                '</div>',
                link: function(scope) {
                    var mapConfig = { minLat: 5.0, maxLat: 38.0, minLong: 65.0, maxLong: 99.0 };

                    // Convert devices or events to map data format
                    scope.$watch('[devices, events]', function(newVal) {
                        var devices = newVal[0];
                        var events = newVal[1];
                        
                        if (devices && devices.length) {
                            // Convert devices to map format
                            scope.mapData = devices.map(function(device) {
                                var status = device.is_active ? 'Normal' : 'Anomaly';
                                return {
                                    id: device.id,
                                    name: device.name,
                                    latitude: device.baseline_lat || device.latitude,
                                    longitude: device.baseline_long || device.longitude,
                                    prediction: status,
                                    farm_name: device.farm_name,
                                    type: 'device',
                                    device: device
                                };
                            }).filter(function(item) {
                                return item.latitude && item.longitude;
                            });
                        } else if (events && events.length) {
                            // Use events as-is
                            scope.mapData = events.map(function(event) {
                                return {
                                    id: event.id || event.event_id,
                                    latitude: event.latitude,
                                    longitude: event.longitude,
                                    prediction: event.prediction,
                                    farm_name: event.farm_name,
                                    type: 'event',
                                    event: event
                                };
                            });
                        } else {
                            scope.mapData = [];
                        }
                    }, true);

                    scope.getMarkerPosition = function(item) {
                        if (!item || !item.latitude || !item.longitude) return {};
                        var xPercent = (item.longitude - mapConfig.minLong) / (mapConfig.maxLong - mapConfig.minLong);
                        var x = 2 + (xPercent * 94);
                        var yPercent = (mapConfig.maxLat - item.latitude) / (mapConfig.maxLat - mapConfig.minLat);
                        var y = 4 + (yPercent * 90);
                        return { left: x + '%', top: y + '%' };
                    };

                    scope.getMarkerClass = function(item) {
                        if (!item) return '';
                        var prediction = item.prediction;
                        switch (prediction) { 
                            case 'Normal': return 'normal badge-normal'; 
                            case 'Suspicious': return 'suspicious badge-suspicious'; 
                            case 'Anomaly': return 'anomaly badge-anomaly'; 
                            default: return ''; 
                        }
                    };

                    scope.handleClick = function(item) {
                        if (item.type === 'device' && scope.onDeviceClick) {
                            scope.onDeviceClick({ device: item.device });
                        } else if (item.type === 'event' && scope.onEventClick) {
                            scope.onEventClick({ event: item.event });
                        } else if (scope.onEventClick) {
                            // Fallback for backward compatibility
                            scope.onEventClick({ event: item });
                        }
                    };
                }
            };
        }]);

    // ============================================
    // LEAFLET INDIA MAP DIRECTIVE (OpenStreetMap-based)
    // ============================================
    
    angular.module('cropGuardApp')
        .directive('leafletIndiaMap', ['$timeout', function($timeout) {
            return {
                restrict: 'E',
                scope: { 
                    devices: '=', 
                    onDeviceClick: '&',
                    onClearMarkers: '&',
                    onRefresh: '&'
                },
                template: '<div class="leaflet-map-wrapper">' +
                    '<div id="leaflet-india-map" class="leaflet-map-container"></div>' +
                    '<div class="map-loading" ng-if="!mapReady">' +
                        '<div class="loading-spinner"></div>' +
                        '<span>Loading map...</span>' +
                    '</div>' +
                '</div>',
                link: function(scope, element, attrs) {
                    var map = null;
                    var markers = [];
                    var hoverPopup = null;
                    var hoverTimeout = null;
                    scope.mapReady = false;

                    // Get device status
                    function getDeviceStatus(device) {
                        if (!device.is_active) return 'Anomaly';
                        return 'Normal';
                    }

                    // Get marker color based on device status
                    function getMarkerColor(status) {
                        switch(status) {
                            case 'Normal': return '#2e7d32';
                            case 'normal': return '#2e7d32';
                            case 'Suspicious': return '#ed6c02';
                            case 'suspicious': return '#ed6c02';
                            case 'Anomaly': return '#d32f2f';
                            case 'anomaly': return '#d32f2f';
                            default: return '#2e7d32';
                        }
                    }

                    // Create custom marker icon
                    function createMarkerIcon(color) {
                        return L.divIcon({
                            className: 'custom-leaflet-marker',
                            html: '<div class="marker-pin" style="background-color: ' + color + ';"></div>' +
                                  '<div class="marker-pulse" style="background-color: ' + color + ';"></div>',
                            iconSize: [30, 30],
                            iconAnchor: [15, 30], // Anchor at bottom center of icon (where marker touches map)
                            popupAnchor: [0, -30] // Position popup 30px above marker anchor point (just above marker)
                        });
                    }

                    // Clear all markers from map
                    function clearMarkers() {
                        // Clear any pending hover timeout
                        if (hoverTimeout) {
                            clearTimeout(hoverTimeout);
                            hoverTimeout = null;
                        }
                        
                        markers.forEach(function(marker) {
                            map.removeLayer(marker);
                        });
                        markers = [];
                        if (hoverPopup) {
                            map.closePopup(hoverPopup);
                            hoverPopup = null;
                        }
                    }

                    // Add markers to map
                    function addMarkers(devices) {
                        if (!map || !devices || !devices.length) return;
                        
                        clearMarkers();

                        devices.forEach(function(device) {
                            var status = getDeviceStatus(device);
                            var color = getMarkerColor(status);
                            var icon = createMarkerIcon(color);
                            
                            var lat = device.baseline_lat || device.latitude;
                            var lng = device.baseline_long || device.longitude;
                            
                            if (!lat || !lng) return; // Skip devices without coordinates
                            
                            // Create simple hover popup (short version)
                            var hoverPopupContent = '<div class="leaflet-popup-content-custom hover-popup">' +
                                '<div class="popup-header-compact">' +
                                    '<strong>' + device.name + '</strong>' +
                                    '<span class="popup-status ' + status.toLowerCase() + '">' + status + '</span>' +
                                '</div>' +
                                '<div class="popup-body-compact">' +
                                    '<div class="popup-row-compact">' + device.type + ' • ' + device.farm_name + '</div>' +
                                '</div>' +
                            '</div>';

                            // Create marker with hover popup
                            var marker = L.marker([lat, lng], { icon: icon })
                                .addTo(map)
                                .bindPopup(hoverPopupContent, { 
                                    className: 'custom-popup hover-popup-wrapper', 
                                    closeOnClick: false, 
                                    autoClose: true, // Allow auto-close
                                    closeButton: false,
                                    autoPan: false // Don't pan map when popup opens
                                    // popupAnchor from icon definition handles positioning
                                });
                            
                            // Show popup on hover - keep it open until mouse leaves both marker and popup
                            marker.on('mouseover', function() {
                                // Clear any pending close timeout
                                if (hoverTimeout) {
                                    clearTimeout(hoverTimeout);
                                    hoverTimeout = null;
                                }
                                
                                marker.openPopup();
                                hoverPopup = marker.getPopup();
                                
                                // Ensure popup is positioned correctly above marker
                                $timeout(function() {
                                    var popup = marker.getPopup();
                                    if (popup && popup.isOpen()) {
                                        // Force Leaflet to recalculate and update popup position
                                        popup.update();
                                        
                                        // Add hover handlers to popup element to keep it open
                                        var popupElement = popup.getElement();
                                        if (popupElement) {
                                            // Keep popup open when hovering over it
                                            var popupMouseEnter = function() {
                                                if (hoverTimeout) {
                                                    clearTimeout(hoverTimeout);
                                                    hoverTimeout = null;
                                                }
                                            };
                                            
                                            var popupMouseLeave = function() {
                                                hoverTimeout = setTimeout(function() {
                                                    marker.closePopup();
                                                    hoverPopup = null;
                                                }, 150);
                                            };
                                            
                                            // Remove old listeners if any
                                            popupElement.removeEventListener('mouseenter', popupMouseEnter);
                                            popupElement.removeEventListener('mouseleave', popupMouseLeave);
                                            
                                            // Add new listeners
                                            popupElement.addEventListener('mouseenter', popupMouseEnter);
                                            popupElement.addEventListener('mouseleave', popupMouseLeave);
                                        }
                                    }
                                }, 10);
                            });

                            marker.on('mouseout', function() {
                                // Don't close immediately - wait a bit in case mouse is moving to popup
                                hoverTimeout = setTimeout(function() {
                                    marker.closePopup();
                                    hoverPopup = null;
                                }, 150);
                            });
                            
                            // On click, scroll to device details section
                            marker.on('click', function() {
                                // Close hover popup
                                marker.closePopup();
                                
                                // Scroll to device details section
                                var deviceDetailsSection = document.querySelector('.geo-events-section');
                                if (deviceDetailsSection) {
                                    var deviceCard = document.querySelector('[data-device-id="' + device.id + '"]');
                                    if (deviceCard) {
                                        // Scroll to specific device card
                                        deviceCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        // Highlight the card briefly
                                        deviceCard.style.transition = 'all 0.3s ease';
                                        deviceCard.style.transform = 'scale(1.05)';
                                        deviceCard.style.boxShadow = '0 8px 24px rgba(184, 134, 11, 0.4)';
                                        setTimeout(function() {
                                            deviceCard.style.transform = '';
                                            deviceCard.style.boxShadow = '';
                                        }, 2000);
                                    } else {
                                        // Scroll to section if card not found
                                        deviceDetailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }
                                
                                // Also trigger the device click handler
                                if (scope.onDeviceClick) {
                                    scope.$apply(function() {
                                        scope.onDeviceClick({ device: device });
                                    });
                                }
                            });

                            markers.push(marker);
                        });

                        // Fit bounds to show all markers if there are any
                        if (markers.length > 0) {
                            var group = new L.featureGroup(markers);
                            map.fitBounds(group.getBounds().pad(0.1));
                        }
                    }

                    // Initialize map
                    function initMap() {
                        $timeout(function() {
                            try {
                                // Create map centered on India
                                map = L.map('leaflet-india-map', {
                                    center: [20.5937, 78.9629],
                                    zoom: 5,
                                    zoomControl: true,
                                    scrollWheelZoom: true
                                });

                                // Add OpenStreetMap tiles with custom styling (no attribution)
                                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                    attribution: '', // Remove attribution
                                    maxZoom: 18,
                                    minZoom: 4
                                }).addTo(map);

                                // Hide Leaflet attribution control
                                map.attributionControl.setPrefix('');

                                scope.mapReady = true;

                                // Load initial markers after map is ready
                                $timeout(function() {
                                    if (scope.devices && scope.devices.length) {
                                        addMarkers(scope.devices);
                                    }
                                }, 300);

                            } catch(error) {
                                console.error('Error initializing Leaflet map:', error);
                            }
                        }, 100);
                    }

                    // Watch for devices changes
                    scope.$watch('devices', function(newVal, oldVal) {
                        if (map) {
                            if (newVal && newVal.length) {
                                addMarkers(newVal);
                            } else {
                                // Clear markers if devices array is empty
                                clearMarkers();
                            }
                        }
                    }, true);

                    // Listen for clear markers event
                    scope.$on('clearMapMarkers', function() {
                        clearMarkers();
                        if (scope.onClearMarkers) {
                            scope.onClearMarkers();
                        }
                    });

                    // Initialize map when directive loads
                    initMap();

                    // Cleanup on destroy
                    scope.$on('$destroy', function() {
                        if (map) {
                            map.remove();
                            map = null;
                        }
                    });
                }
            };
        }]);

})();
