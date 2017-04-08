require_once __DIR__ . '/vendor/autoload.php';

var facebook_API_KEY = "63ba423109b2b8a006b9a4e255259c68";

$fb = new Facebook\Facebook([
  'app_id' => '243919602679320',
  'app_secret' => facebook_API_KEY,
  'default_graph_version' => 'v2.5',
]);

$helper = $fb->getJavaScriptHelper();
try {
  $accessToken = $helper->getAccessToken();
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  // When Graph returns an error
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  // When validation fails or other local issues
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}

if (isset($accessToken)) {
  // Logged in
}