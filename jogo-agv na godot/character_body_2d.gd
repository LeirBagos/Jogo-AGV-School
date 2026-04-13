extends CharacterBody2D

var speed : int

func _ready ():
	speed = 1000

func get_input():
	var input_dir = Input.get_vector("left", "right", "up", "down")
	velocity = input_dir * speed

func _physics_process(_delta):
	get_input()
	move_and_slide()
