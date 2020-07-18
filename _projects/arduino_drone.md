---
layout: project
toc: true
permalink: /projects/arduino-drone/

featured: true
tags:
  - C++
  - Arduino
  - Electronics
  - Python
  - 3D Printing

hero_image: /assets/images/hero_gears.jpg
image: /assets/images/gears.jpg
title: Arduino Drone
subtitle: Drone based on Arduino technology, programmed from scratch
description: Quadcopter drone built using an already made commercial frame, controlled by a PID controller on an Arduino Nano. As IMU an MPU6050 has been used. The board has the possibility to communicate through Bluetooth using an HC-05 module.
---

### Introduction

Commercial drones are everywhere. Since their commercial boom some years ago, they have been upgraded on their autonomy, stability, and other functionalities such as GPS guidance or computer vision. Their range of applications is wide, varying from surveillance, GIS mapping, filming, or just recreational use.


In this project we will build a drone, more specifically a quadcopter, that can stabilize itself through a PID Controller with the data given by an Inertial Measurement Unit.  
The objective of the drone is to maintain itself flying stably while maintaining the flight parameters given by the radio control, such as pitch, roll or thrust. This defines a Control Problem which is handled by the PID Controller.  
To produce the lift necessary to stay in the air four propellers will be used, each of one driven by a brushless motor with its corresponding Electronic Speed Controller (or ESC). The necessary energy to power up everything will be provided by a Li-Po battery.

### Describing the components

#### The motors

For a DC motor to do work, a series of coils must be energized and deenergized in an orderly process called commutation. In brushed motors, this process is done by mechanical parts called brushes. As the motor spins, the brushes slide on a part called commutator, bridging the motor connectors and the different coils developing torque. This physical sliding tends to wear out the brushes, shortening the lifetime of the motor.  
On the other side, brushless motors (or BLDC motors), as their name suggests, lack brushes. The commutation is done externally by an electronic device called Electronic Speed Controller (or ESC) [^1]. Besides, they also have higher efficiency and torque to weight ratio.
On this drone, we will use 1000kV BLDC motors. The kV constant relates the motor speed and the back electromotive force (or back-emf) [^2]. This can tell us approximately how many RPM the motor will develop per Volt applied when it is unloaded. As an example, when 5 Volts are applied to the motor it will spin roughly at 5000 RPM.

#### The ESCs

As seen above, the commutation of a brushless motor is done externally by a device called ESC. It has three wires as an output, each one for one phase of the motor, two wires for powering it, and one wire for the input. It can also have two additional wires along with the input. This is called the Battery Eliminator Circuit (or BEC) and outputs 5V regulated DC, which can be useful to power up electronic components.  
The input must be in PWM signal form with, in this case, 50Hz of frequency and a high state duration varying from one to two milliseconds, being one millisecond zero speed and two milliseconds full speed.

#### The battery

As the motors are very power demanding, we will use a Li-Po battery.  
Li-Po batteries are made up of cells. Each cell has a nominal voltage of 3.7 Volts, and they are connected in series summing up the total voltage of the battery. The number of cells is show in the format #S, being # the number of cells. The S denotation comes from serial connection between cells [^3].  
Other important values to take in account are the capacity and the maximum discharge rate.
The capacity is how much energy the battery can storage. It is usually measured in milliamperes hour (mAh). It can be interpreted as how many amperes the battery can provide to drain it in one hour.
The maximum discharge rate, or maximum C-rate, tells us how much current we can output the battery without damaging it. This parameter is relative to the capacity of the battery and comes represented as _#C_, where # is a number that represents how many times the current necessary to drain the battery in one hour can be extracted.  The relationship between this number and the capacity can be better understood in an example.
The battery used in the drone has 3000mAh of capacity and a C-rate of 25C. This means that, at its maximum safe discharge it can provide

# Falta fórmula

To achieve the desired motor speed to produce the necessary lift, we will use a 3S battery.

#### The microcontroller

---
[^1]: The commutation can also be done internally in some motors. These usually have a HAL effect sensor which detects the current position of the rotor and dictates which coils should be energized.
[^2]: For a more detailed explanation, you can check this website. http://learningrc.com/motor-kv/ 
[^3]: Some older batteries might have the format #S#P, meaning they have cells in series and parallel.
