"use strict";

class Agent
{
	constructor(
		middlePointX,
		middlePointY,
		moveSpeed = moveSpeed,
		visualProperties,
		angle = random(0, Math.PI * 2),
		spawnX = middlePointX,
		spawnY = middlePointY)
	{
		// set properties
		this.moveSpeed = moveSpeed;
		this.agentAlive = true;
		this.angle = angle;
		this.visualProperties = visualProperties;

		// set middle point
		this.location = createVector(
			middlePointX,
			middlePointY);
		this.spawnLocation = createVector(
			spawnX,
			spawnY);
	}

	drawLocation(ctx)
	{
		if (!this.agentAlive)
		{
			return;
		}
	}

	updateCycle()
	{
		console.log("Im a master agent, killing myself");

		this.agentAlive = false;

		if (!this.agentAlive)
		{
			return;
		}
	}
}