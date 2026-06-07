// AngularJS Application for Agriculture Dashboard Login
var app = angular.module('loginApp', []);

app.controller('LoginController', ['$scope', '$http', function($scope, $http) {
    
    // Initialize form data
    $scope.formData = {
        userId: '',
        password: ''
    };
    
    $scope.loading = false;
    
    // Get device type
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
    
    // Get device OS
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
    
    // Get IP Address
    function getIPAddress() {
        return fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => data.ip)
            .catch(error => {
                console.error('Error getting IP:', error);
                return 'unavailable';
            });
    }
    
    // Get Geolocation (Latitude & Longitude)
    function getGeolocation() {
        return new Promise((resolve, reject) => {
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
                    console.error('Geolocation error:', error);
                    resolve({ latitude: null, longitude: null });
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            );
        });
    }
    
    // Handle form submission
    $scope.handleLogin = async function(event) {
        event.preventDefault();
        
        // Validate form
        if (!$scope.formData.userId || !$scope.formData.password) {
            alert('Please enter both username and password');
            return;
        }
        
        $scope.loading = true;
        $scope.$apply();
        
        try {
            // Get all required data
            const deviceType = getDeviceType();
            const deviceOS = getDeviceOS();
            const ipAddress = await getIPAddress();
            const geoLocation = await getGeolocation();
            
            // Create payload
            const payload = {
                userid: $scope.formData.userId,
                pwd: $scope.formData.password,
                deviceType: deviceType,
                deviceOS: deviceOS,
                ipAddress: ipAddress,
                longitude: geoLocation.longitude,
                latitude: geoLocation.latitude
            };
            
            console.log('Login Payload:', payload);
            
            // Send to API - Replace with your actual API endpoint
            $http.post('/api/login', payload)
                .then(function(response) {
                    $scope.loading = false;
                    alert('Login successful!');
                    console.log('API Response:', response.data);
                    
                    // Redirect or handle success
                    // window.location.href = '/dashboard';
                })
                .catch(function(error) {
                    $scope.loading = false;
                    alert(error.data?.message || 'Login failed. Please try again.');
                    console.error('API Error:', error);
                });
            
            // For testing without API endpoint, uncomment this:
            /*
            setTimeout(function() {
                $scope.loading = false;
                alert('Login data collected! Check console.');
                $scope.$apply();
            }, 1500);
            */
            
        } catch (error) {
            $scope.loading = false;
            alert('An error occurred. Please try again.');
            console.error('Login error:', error);
            $scope.$apply();
        }
    };
    
}]);