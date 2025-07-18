#include "RenderParticle.h"

void RenderParticle::Draw() {

	if (!PhysicsParticle->IsDestroyed()) {
		RenderObject->modelColor = (glm::vec3)Color;
		RenderObject->position = (glm::vec3)PhysicsParticle->position;
		RenderObject->scale = (glm::vec3)Scale;

		RenderObject->draw();
	}
}