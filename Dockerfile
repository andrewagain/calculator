# Base image
FROM node:16-alpine

# Add group and user to avoid root user usage for security reasons.
RUN addgroup calgroup
RUN adduser -D caluser calgroup

# copy source code and set up work directory
RUN mkdir /calculator
COPY . /calculator
WORKDIR /calculator

# change ownership of work directory and use created user
RUN chown -R caluser:calgroup /calculator
USER caluser

#intimate docker which port will be used
EXPOSE 3000

# Run application
RUN npm install
CMD ["npm", "start"]