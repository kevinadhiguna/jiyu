FROM gitpod/workspace-node:latest

RUN sudo install-packages direnv \
    && echo 'eval "$(direnv hook bash)"' >> $HOME/.bashrc
