def assign_reason(data: dict) -> list[str]:
    reasons = []

    # 1️⃣ Auth anomalies
    if data["failed_auth_attempts_past_10min"] >= 5:
        reasons.append("Multiple failed authentication attempts")

    if data["auth_status"] == "failure":
        reasons.append("Authentication failure")

    # 2️⃣ Geo anomalies
    if data["geo_dist_from_baseline_km"] > 20:
        reasons.append("Access from unusual geographic location")

    # 3️⃣ Device anomalies
    if data["sensor_signal_strength"] < 35:
        reasons.append("Weak sensor signal strength")

    if data["sensor_reading_variance"] > 40:
        reasons.append("High sensor reading variance")

    # 4️⃣ Configuration anomalies
    if data["config_change_flag"] == 1:
        reasons.append("Unexpected configuration change")

    # 5️⃣ Environmental inconsistencies
    if data["weather_consistency_score"] < 40:
        reasons.append("Weather data inconsistent with historical patterns")

    if data["soil_moisture_percent"] > 90 or data["soil_moisture_percent"] < 5:
        reasons.append("Abnormal soil moisture level")

    if data["humidity_percent"] > 95 or data["humidity_percent"] < 10:
        reasons.append("Abnormal humidity level")

    # 6️⃣ Irrigation anomalies
    if data["irrigation_water_volume_liters"] > 1000:
        reasons.append("Excessive irrigation water usage")

    # Fallback
    if not reasons:
        reasons.append("Normal agricultural operation")

    return reasons
