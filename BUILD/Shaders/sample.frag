#version 330 core

uniform sampler2D tex0;

uniform vec3 lightPos;
uniform vec3 lightColor;

uniform vec3 ambientColor;
uniform float ambientStr;

uniform vec3 cameraPos;
uniform float specStr;
uniform float specPhong;

uniform vec3 modelColor;
uniform vec3 color;

uniform bool isLine;

out vec4 FragColor; 

in vec2 texCoord;
in vec3 normCoord;
in vec3 fragPos;

void main()
{
    vec3 normal = normalize(normCoord);
    vec3 lightDir = normalize(lightPos - fragPos);
    float diff = max(dot(normal, lightDir), 0.0);
    vec3 diffuse = diff * lightColor;

    vec3 ambientCol = ambientColor * ambientStr;


    vec3 viewDir = normalize(cameraPos - fragPos);

    vec3 reflectDir = reflect(-lightDir, normal);

    float spec = pow(max(dot(reflectDir, viewDir), 0.1), specPhong);

    vec3 specColor = spec* specStr * lightColor;

    if (isLine)
        FragColor = vec4(1.0, 1.0, 1.0, 1.0); // white line
    else
        FragColor = vec4(modelColor, 1.0);
}
