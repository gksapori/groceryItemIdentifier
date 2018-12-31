/* Used to create a url.txt file; will list all the URLs of images on a google image search
 * Must be done before running the download_images.py file, to download each picture
 * To use:
 *  1. Search for an image in google images search query
 *  2. Open up the console by inspecting element
 *  3. Paste all the text in this file and hit enter
 *
 * *** A file called urls.txt will be creatd in your downloads folder ***
 * See the download_images.py file for instructions on how to donwnload the images from the urls.txt file
 */

//add jquery to the javascript console
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

// grab the URLs
var urls = $('.rg_di .rg_meta').map(function() {
  return JSON.parse($(this).text()).ou;
});

// write the URls to file (one per line)
var textToSave = urls.toArray().join('\n');
var hiddenElement = document.createElement('a');
hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
hiddenElement.target = '_blank';
hiddenElement.download = 'urls.txt';
hiddenElement.click();
