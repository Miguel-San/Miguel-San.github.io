---
layout: project
toc: true
show_sidebar: true
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

## Introduction

Commercial drones are everywhere. Since their commercial boom some years ago, they have been upgraded on their autonomy, stability, and other functionalities such as GPS guidance or computer vision. Their range of applications is wide, varying from surveillance, GIS mapping, filming, or just recreational use.

In this project we will build a drone, more specifically a quadcopter, that can stabilize itself through a PID Controller with the data given by an Inertial Measurement Unit.  

The objective of the drone is to maintain itself flying stably while maintaining the flight parameters given by the radio control, such as pitch, roll or thrust. This defines a Control Problem which is handled by the PID Controller.  

To produce the lift necessary to stay in the air four propellers will be used, each of one driven by a brushless motor with its corresponding Electronic Speed Controller (or ESC). The necessary energy to power up everything will be provided by a Li-Po battery.

## Brief description of the components

### The motors

For a DC motor to do work, a series of coils must be energized and deenergized in an orderly process called commutation. In brushed motors, this process is done by mechanical parts called brushes. As the motor spins, the brushes slide on a part called commutator, bridging the motor connectors and the different coils, developing torque. This physical sliding tends to wear out the brushes, shortening the lifetime of the motor.  

On the other side, brushless motors (or BLDC motors), as their name suggests, lack brushes. The commutation is done externally by an electronic device called Electronic Speed Controller (or ESC) [^1]. Besides, they also have higher efficiency and torque to weight ratio.

On this drone, we will use 1000kV BLDC motors. The kV constant relates the motor speed and the back electromotive force (or back-emf) [^2]. This can tell us approximately how many RPM the motor will develop per Volt applied when it is unloaded. As an example, when 5 Volts are applied to the motor it will spin roughly at 5000 RPM.

### The ESCs

As seen above, the commutation of a brushless motor is done externally by a device called ESC. It has three wires as an output, each one for one phase of the motor, two wires for powering it, and one wire for the input. It can also have two additional wires along with the input. This is called the Battery Eliminator Circuit (or BEC) and outputs 5V regulated DC, which can be useful to power up electronic components.  

The input must be in PWM signal form with, in this case, 50Hz of frequency and a high state duration varying from one to two milliseconds, being one millisecond zero speed and two milliseconds full speed.

### The battery

As the motors are very power demanding, we will use a Li-Po battery.  

Li-Po batteries are made up of cells. Each cell has a nominal voltage of 3.7 Volts, and they are connected in series summing up the total voltage of the battery. The number of cells is show in the format $\text{#S}$, being $\text{#}$ the number of cells. The S denotation comes from serial connection between cells [^3]. It is very important to note that, under any circumstance, the voltage of a cell can drop under 3.0V since this can cause permanent damage to the cell.

Other important values to take in account are the capacity and the maximum discharge rate. [^4]

The capacity is how much energy the battery can storage. It is usually measured in milliamperes hour (mAh). It can be interpreted as how many amperes the battery can provide to drain it in one hour.

The maximum discharge rate, or maximum C-rate, tells us how much current we can output the battery without damaging it. This parameter is relative to the capacity of the battery and comes represented as $\text{#C}$, where $\text{#}$ is a number that represents how many times the current necessary to drain the battery in one hour can be extracted.  The relationship between this number and the capacity can be better understood in the next example.

The battery used in the drone is a 3S and has 3000mAh of capacity and a C-rate of 25C. This means that, as its maximum safe discharge can provide:

$$25\text{C} \cdot 3000\text{ mAh} = 75000\text{ mA} = 75 \text{ A}$$

Note that, from the formula above, it's clear that the C-rate has units of $\text{h}^{-1}$.

### The IMU

The Inertial Measurement Unit (or IMU) has the function of getting the current rotation of the drone. It achieves this by combining the data from a gyroscope and an accelerometer sensor and in some cases a magnetometer.

In this case, the IMU used is an MPU6050 which provides a 3-axis gyroscope and a 3-axis accelerometer which makes a total of six different independent variables to measure or, using the most common terminology, six degrees of freedom (or DoF).

For resource optimization, we will use an already made [library for Arduino](http://www.i2cdevlib.com/) made by [Jeff Rowberg](https://github.com/jrowberg). This library provides a collection of classes to communicate to a variety of I2C devices. In this case, we will need the [base library]( https://github.com/jrowberg/i2cdevlib) and the [corresponding to the MPU6050](https://github.com/jrowberg/i2cdevlib/tree/master/Arduino/MPU6050).

### The microcontroller

The microcontroller used is an Arduino Nano and it will be responsible for reading the IMU data and process it with a PID Controller, as well as receiving the flight parameters through RC and communication with ground control via Bluetooth.

### Other components

#### Radio Control

The RC is performed by a commercial Fly Sky controller.

The receiver is an FS-iA6B and it will interact with the Arduino through the iBUS protocol. For this purpose we will use [this library](https://github.com/aanon4/FlySkyIBus) by [Tim Wilkinson](https://github.com/aanon4).

#### Bluetooth communication

For the Bluetooth communication we will use the HC-05 module (although the HC-06 it also valid).


---
[^1]: The commutation can also be done internally in some motors. These usually have a HAL effect sensor which detects the current position of the rotor and dictates which coils should be energized.
[^2]: You can check [this website](http://learningrc.com/motor-kv/) for a more detailed explanation.
[^3]: Some older batteries might have the format $\text{#S#P}$, meaning they have cells in series and parallel.
[^4]: Read [this](http://web.mit.edu/evt/summary_battery_specifications.pdf) for a more complete description of the parameters of a battery.




