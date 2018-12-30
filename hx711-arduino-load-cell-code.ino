/* hx711-arduino-load-cell-code.ino
 * Joshua Galliera
 * December 29th, 2018
 
 * Arduino Pin # --> HX711 CLK
 * Arduino Pin # --> HX711 DOUT
 * Arduino Pin 5V --> HX711 VCC
 * Arduino Pin GND --> HX711 GND
 */
 
#include "HX711.h" //This is a library from Github

HX711 scale(2,3);

float calibration_factor = 100; //Figure out through trial and error

void setup() 
{
  Serial.begin(96000);
  scale.set_scale(calibration_factor); 
  scale.tare();
}

void loop() 
{
  Serial.print(scale.get_units(), 1);
  Serial.print(" kg");
  Serial.println();
}
